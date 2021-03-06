import {
  Arg,
  ArgsType,
  Field,
  Query,
  Resolver,
  Mutation,
  Args,
} from 'type-graphql';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { Employee } from './../../db/models/Employee';
import { EmployeeProject } from './../../db/models/EmployeeProject';
import { Session } from './../../db/models/Session';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { Project } from './../../db/models/Project';
import { SuccessResponse } from '../types/SuccessResponse';
import { getSequelize } from 'src/db/sequelize';

const modelIncludeArray = [Employee, Project, Session];
@ArgsType()
class EmployeeProjectArrgs {
  @Field({ nullable: true })
  addDate?: Date;

  @Field({ nullable: true })
  removeDate?: Date;
}

@Resolver(() => EmployeeProject)
export class EmployeeProjectResolver {
  @Query(() => EmployeeProject)
  async employeeProject(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('employeeProjectId', { nullable: true }) employeeProjectId?: number,
    @Arg('projectId', { nullable: true }) projectId?: number,
  ): Promise<EmployeeProject> {
    if (!id && !(employeeProjectId && projectId))
      throw new UserInputError(ErrorMessage.EmployeeProjectArgumentError);
    try {
      const employeeProject = id
        ? await EmployeeProject.findOne({
            where: { id },
            include: modelIncludeArray,
          })
        : await EmployeeProject.findOne({
            where: { employeeProjectId, projectId },
            include: modelIncludeArray,
          });

      if (!employeeProject) throw new Error(ErrorCode.BadUserInput);
      return employeeProject;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.EmployeeProjectNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [EmployeeProject])
  async employeeProjects(): Promise<EmployeeProject[]> {
    try {
      return await EmployeeProject.findAll({
        include: modelIncludeArray,
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createEmployeeProject(
    @Args()
    { addDate, removeDate }: EmployeeProjectArrgs,
    employeeId: number,
    projectId: number,
  ): Promise<SuccessResponse> {
    try {
      await EmployeeProject.create({
        addDate,
        removeDate,
        employeeId,
        projectId,
      });
    } catch (error) {
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return {
      success: true,
    };
  }

  @Mutation(() => SuccessResponse)
  async updateEmployeeProject(
    @Args()
    { addDate, removeDate }: EmployeeProjectArrgs,
    @Arg('id', { nullable: true }) id?: number,
    @Arg('employeeProjectId', { nullable: true }) employeeProjectId?: number,
    @Arg('projectId', { nullable: true }) projectId?: number,
  ): Promise<SuccessResponse> {
    if (!id && !(employeeProjectId && projectId))
      throw new UserInputError(ErrorMessage.EmployeeProjectArgumentError);
    try {
      const employeeProject = id
        ? await EmployeeProject.findOne({
            where: { id },
          })
        : await EmployeeProject.findOne({
            where: { employeeProjectId, projectId },
          });
      if (!employeeProject) throw new Error(ErrorCode.BadUserInput);
      await EmployeeProject.update(
        {
          addDate,
          removeDate,
        },
        { where: { id: employeeProject.id } },
      );
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.EmployeeProjectNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return {
      success: true,
    };
  }

  @Mutation(() => SuccessResponse)
  async deleteEmployeeProject(
    @Arg('id') id: number,
    @Arg('employeeProjectId', { nullable: true }) employeeProjectId?: number,
    @Arg('projectId', { nullable: true }) projectId?: number,
  ): Promise<SuccessResponse> {
    if (!id && !(employeeProjectId && projectId))
      throw new UserInputError(ErrorMessage.EmployeeProjectArgumentError);

    try {
      const employeeProject = id
        ? await EmployeeProject.findOne({ where: { id } })
        : await EmployeeProject.findOne({
            where: { employeeProjectId, projectId },
          });
      if (!employeeProject) throw new UserInputError(ErrorCode.BadUserInput);
      await getSequelize().transaction(async (t) => {
        await Session.destroy({
          where: { employeeProjectId: employeeProject.id },
          transaction: t,
        });
        await EmployeeProject.destroy({
          where: { id: employeeProject.id },
          transaction: t,
        });
      });
      await EmployeeProject.destroy({
        where: { id: employeeProject.id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.EmployeeProjectNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
}
