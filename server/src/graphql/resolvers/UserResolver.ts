import { createRefreshToken, createAccessToken } from './../auth';
import { MyContext } from '../types/MyContext';
import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { compare, hash } from 'bcryptjs';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { User } from '../../db/models/User';
import { isAuth } from '../isAuth';
import { sendRefeshToken } from '../sendRefreshToken';
import { getSequelize } from './../../db/sequelize';
import { verify } from 'jsonwebtoken';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
  @Field(() => User)
  user: User;
}

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(@Arg('id') id: number): Promise<User> {
    try {
      const user = await User.findOne({ where: { id } });
      if (!user) throw new Error(ErrorCode.BAD_USER_INPUT);
      return user;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.USER_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    try {
      return await User.findAll();
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() context: MyContext) {
    const authorization = context.req.headers['authorization'];
    if (!authorization) return null;
    try {
      const token = authorization.split(' ')[1];
      const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      return User.findOne({ where: { id: payload.userId } });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @Query(() => String)
  hello() {
    return 'YOOOO!';
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    return `id is: ${payload!.userId}`;
  }

  @Mutation(() => Boolean)
  async register(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Arg('employeeId', { nullable: true }) employeeId?: number,
    @Arg('roleId', { nullable: true }) roleId?: number,
  ): Promise<Boolean> {
    try {
      const hashedPassword = await hash(password, 12);
      await User.create({
        username,
        password: hashedPassword,
        employeeId,
        roleId,
      });
    } catch (error) {
      if (error.message === ErrorCode.VALIDATION_ERROR)
        throw new UserInputError(ErrorMessage.USER_ALREADY_EXIST, error.errors);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() { res }: MyContext,
  ): Promise<LoginResponse> {
    let user;
    try {
      user = await User.findOne({ where: { username } });
      if (!user) throw new UserInputError(ErrorCode.BAD_USER_INPUT);

      const validPassword = await compare(password, user.password);
      if (!validPassword) throw new UserInputError(ErrorCode.BAD_USER_INPUT);

      await User.update({ lastLogin: new Date() }, { where: { username } });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.USER_ARG_ERROR);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }

    sendRefeshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
      user,
    };
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: MyContext) {
    sendRefeshToken(res, '');
    return true;
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg('userId', () => Int) userId: number) {
    await getSequelize()
      .getRepository(User)
      .increment('tokenVersion', { by: 1, where: { id: userId } });

    return true;
  }
}
