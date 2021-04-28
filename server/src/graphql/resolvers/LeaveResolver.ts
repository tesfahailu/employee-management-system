import { Leave, LeaveType } from './../../db/models/Leave';
import { ApolloError, UserInputError } from 'apollo-server-express';
import {
  Arg,
  Args,
  ArgsType,
  Field,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { SuccessResponse } from '../types/Common';

@ArgsType()
class LeaveArgs {
  @Field({ nullable: true })
  to?: Date;

  @Field({ nullable: true })
  from?: Date;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  type?: LeaveType;
}

@Resolver()
export class LeaveResolver {
  //experience
  @Query(() => Leave)
  async leave(@Arg('id') id?: number): Promise<Leave> {
    try {
      const leave = await Leave.findOne({ where: { id } });
      if (!leave) throw new Error(ErrorCode.BAD_USER_INPUT);
      return leave;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.LEAVE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }
  //experiences
  @Query(() => [Leave])
  async experiences(@Arg('employeeId') employeeId: number): Promise<Leave[]> {
    try {
      const leaves = await Leave.findAll({
        where: { id: employeeId },
      });
      if (!leaves) throw new Error(ErrorCode.BAD_USER_INPUT);
      return leaves;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.LEAVE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Mutation(() => SuccessResponse)
  async createLeave(
    @Args() { to, from, description, type }: LeaveArgs,
  ): Promise<SuccessResponse> {
    try {
      await Leave.create({ to, from, description, type });
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
  @Mutation(() => SuccessResponse)
  async updateLeave(
    @Arg('id') id: number,
    @Args() { to, from, description, type }: LeaveArgs,
  ): Promise<SuccessResponse> {
    try {
      const leave = await Leave.findOne({ where: { id } });
      if (!leave) throw new Error(ErrorCode.BAD_USER_INPUT);
      await Leave.update({ to, from, description, type }, { where: { id } });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.LEAVE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteLeave(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const leave = await Leave.findOne({ where: { id } });
      if (!leave) throw new UserInputError(ErrorCode.BAD_USER_INPUT);
      await Leave.destroy({
        where: { id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.LEAVE_NOT_FOUND);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
}
