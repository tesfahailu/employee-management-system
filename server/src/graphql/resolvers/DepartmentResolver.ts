import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserInputError, ApolloError } from 'apollo-server-express';
import { Department, DepartmentType } from './../../db/models/Department';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { SuccessResponse } from '../types/SuccessResponse';

@Resolver()
export class DepartmentResolver {
  @Query(() => Department)
  async department(@Arg('id') id: number): Promise<Department> {
    try {
      const department = await Department.findOne({ where: { id } });
      if (!department) throw new Error(ErrorCode.BadUserInput);
      return department;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.DepartmentNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [Department])
  async departments(): Promise<Department[]> {
    try {
      return await Department.findAll();
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createDepartment(
    @Arg('title', () => DepartmentType, { nullable: true })
    title?: DepartmentType,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<SuccessResponse> {
    try {
      await Department.create({ title, description });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
  @Mutation(() => SuccessResponse)
  async updateDepartment(
    @Arg('id') id: number,
    @Arg('title', () => DepartmentType, { nullable: true })
    title?: DepartmentType,
    @Arg('description', {
      nullable: true,
    })
    description?: string,
  ): Promise<SuccessResponse> {
    try {
      const department = await Department.findOne({ where: { id } });
      if (!department) throw new Error(ErrorCode.BadUserInput);
      await Department.update({ title, description }, { where: { id } });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.DepartmentNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteDepartment(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const department = await Department.findOne({ where: { id } });
      if (!department) throw new UserInputError(ErrorCode.BadUserInput);
      await Department.destroy({
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
