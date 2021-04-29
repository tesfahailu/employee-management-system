import { Login } from './../../db/models/Login';
import { Arg, Field, Mutation, ObjectType, Resolver } from 'type-graphql';
import { compare, hash } from 'bcryptjs';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { ApolloError, UserInputError } from 'apollo-server-express';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => Login)
  loginUser: Login;
}

@Resolver()
export class LoginResolver {
  @Mutation(() => Boolean)
  async register(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Arg('employeeId', { nullable: true }) employeeId?: number,
    @Arg('roleId', { nullable: true }) roleId?: number,
  ) {
    try {
      const hashedPassword = await hash(password, 12);
      await Login.create({
        username,
        password: hashedPassword,
        employeeId,
        roleId,
      });
    } catch (error) {
      if (error.message === ErrorCode.VALIDATION_ERROR)
        throw new UserInputError(
          ErrorMessage.LOGIN_ALREADY_EXIST,
          error.errors,
        );
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('username') username: string,
    @Arg('password') password: string,
  ): Promise<LoginResponse> {
    let loginUser;
    try {
      loginUser = await Login.findOne({ where: { username } });
      if (!loginUser) throw new UserInputError(ErrorCode.BAD_USER_INPUT);

      const validPassword = await compare(password, loginUser.password);
      if (!validPassword) throw new UserInputError(ErrorCode.BAD_USER_INPUT);

      await Login.update({ lastLogin: new Date() }, { where: { username } });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.LOGIN_ARG_ERROR);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return {
      accessToken: 'CCOOOOLLLL',
      loginUser,
    };
  }
}
