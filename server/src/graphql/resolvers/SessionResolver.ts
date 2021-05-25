import {
  Arg,
  Args,
  ArgsType,
  Field,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { UserInputError, ApolloError } from 'apollo-server-express';
import { Session } from './../../db/models/Session';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { SuccessResponse } from '../types/SuccessResponse';
import { DepartmentType } from './../../db/models/Department';

@ArgsType()
class SessionArgs {
  @Field()
  task: string;
  @Field(() => DepartmentType)
  department: DepartmentType;
  @Field()
  startDate: string;
  @Field()
  endDate: string;
}

@Resolver()
export class SessionResolver {
  @Query(() => Session)
  async session(@Arg('id') id: number): Promise<Session> {
    try {
      const session = await Session.findOne({ where: { id } });
      if (!session) throw new Error(ErrorCode.BadUserInput);
      return session;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.SessionNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [Session])
  async sessions(): Promise<Session[]> {
    try {
      return await Session.findAll();
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createSession(
    @Args() { task, department, startDate, endDate }: SessionArgs,
  ): Promise<SuccessResponse> {
    try {
      await Session.create({ task, department, startDate, endDate });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateSession(
    @Arg('id') id: number,
    @Args() { task, department, startDate, endDate }: SessionArgs,
  ): Promise<SuccessResponse> {
    try {
      const session = await Session.findOne({ where: { id } });
      if (!session) throw new Error(ErrorCode.BadUserInput);
      await Session.update(
        { task, department, startDate, endDate },
        { where: { id } },
      );
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.DepartmentNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteSession(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const session = await Session.findOne({ where: { id } });
      if (!session) throw new UserInputError(ErrorCode.BadUserInput);
      await Session.destroy({
        where: { id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.DepartmentNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
}
