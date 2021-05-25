import { Salary } from './../../db/models/Salary';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { ErrorCode, ErrorMessage } from './../errors/Errors';
import { Employee } from './../../db/models/Employee';
import { SuccessResponse } from '../types/SuccessResponse';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class SalaryResolver {
  @Query(() => Salary)
  async salary(@Arg('id') id: number) {
    try {
      const salary = await Salary.findOne({
        where: { id },
        include: [Employee],
      });
      if (!salary) throw new Error(ErrorCode.BadUserInput);
      return salary;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.SalaryNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [Salary])
  async salaries(@Arg('employeeId') employeeId: number) {
    try {
      return await Salary.findAll({
        where: { employeeId },
        include: [Employee],
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createSalary(
    @Arg('amount', { nullable: true }) amount?: number,
    @Arg('startDate', { nullable: true }) startDate?: Date,
    @Arg('endDate', { nullable: true }) endDate?: Date,
  ) {
    try {
      await Salary.create({ amount, startDate, endDate });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async updateSalary(
    @Arg('id') id: number,
    @Arg('amount', { nullable: true }) amount?: number,
    @Arg('startDate', { nullable: true }) startDate?: Date,
    @Arg('endDate', { nullable: true }) endDate?: Date,
  ) {
    try {
      const salary = await Salary.findOne({ where: { id } });
      if (!salary) throw new Error(ErrorCode.BadUserInput);
      await Salary.update({ amount, startDate, endDate }, { where: { id } });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.SalaryNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteSalary(@Arg('id') id: number) {
    try {
      const salary = await Salary.findOne({ where: { id } });
      if (!salary) throw new UserInputError(ErrorCode.BadUserInput);
      await Salary.destroy({
        where: { id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.SalaryNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
  }
}
