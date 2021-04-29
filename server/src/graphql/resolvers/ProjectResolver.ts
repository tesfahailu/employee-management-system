import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { ErrorMessage, ErrorCode } from './../errors/Errors';
import { Session } from './../../db/models/Session';
import { SuccessResponse } from '../types/Common';
import { EmployeeProject } from './../../db/models/EmployeeProject';
import { Project } from './../../db/models/Project';
import { getSequelize } from './../../db/sequelize';

@Resolver()
export class ProjectResolver {
  @Query(() => Project)
  async project(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
  ): Promise<Project> {
    if (!id && !name) throw new UserInputError(ErrorMessage.PROJECT_ARG_ERROR);

    try {
      const project = id
        ? await Project.findOne({ where: { id } })
        : await Project.findOne({ where: { name } });
      if (!project) throw new Error(ErrorCode.BAD_USER_INPUT);
      return project;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.PROJECT_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Query(() => [Project])
  async projects(): Promise<Project[]> {
    try {
      return await Project.findAll({
        include: { all: true },
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Mutation(() => SuccessResponse)
  async createProject(
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<SuccessResponse> {
    try {
      await Project.create({ name, description });
    } catch (error) {
      if (error.message === ErrorCode.VALIDATION_ERROR)
        throw new UserInputError(ErrorMessage.NAME_ALREADY_EXIST, error.errors);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateProject(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: number,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name) throw new UserInputError(ErrorMessage.PROJECT_ARG_ERROR);
    try {
      if (id) {
        const project = await Project.findOne({ where: { id } });
        if (!project) throw new Error(ErrorCode.BAD_USER_INPUT);
        await Project.update({ name, description }, { where: { id } });
      } else if (name) {
        const project = await Project.findOne({ where: { name } });
        if (!project) throw new Error(ErrorCode.BAD_USER_INPUT);
        await Project.update({ name, description }, { where: { name } });
      }
    } catch (error) {
      if (error.message === ErrorCode.VALIDATION_ERROR)
        throw new UserInputError(ErrorMessage.NAME_ALREADY_EXIST, error.errors);
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.PROJECT_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteResource(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name) throw new UserInputError(ErrorMessage.PROJECT_ARG_ERROR);

    try {
      const project = id
        ? await Project.findOne({ where: { id } })
        : await Project.findOne({ where: { name } });

      if (!project) throw new Error(ErrorCode.BAD_USER_INPUT);
      await getSequelize().transaction(async (t) => {
        await Project.destroy({ where: { id }, transaction: t });
        const employeeProjects = await EmployeeProject.findAll({
          where: { projectId: id },
          transaction: t,
        });
        await Promise.all(
          employeeProjects.map(async ({ id }) => {
            await Session.destroy({
              where: { employeeProjectId: id },
              transaction: t,
            });
          }),
        );
        await EmployeeProject.destroy({
          where: { projectId: id },
          transaction: t,
        });
      });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.PROJECT_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
}
