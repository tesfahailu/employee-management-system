import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { ErrorMessage, ErrorCode } from './../errors/Errors';
import { Session } from './../../db/models/Session';
import { SuccessResponse } from '../types/SuccessResponse';
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
    if (!id && !name)
      throw new UserInputError(ErrorMessage.ProjectArgumentError);

    try {
      const project = id
        ? await Project.findOne({ where: { id } })
        : await Project.findOne({ where: { name } });
      if (!project) throw new Error(ErrorCode.BadUserInput);
      return project;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ProjectNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [Project])
  async projects(): Promise<Project[]> {
    try {
      return await Project.findAll({
        include: { all: true },
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
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
      if (error.message === ErrorCode.ValidationError)
        throw new UserInputError(ErrorMessage.NameAlreadyExist, error.errors);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateProject(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: number,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name)
      throw new UserInputError(ErrorMessage.ProjectArgumentError);
    try {
      if (id) {
        const project = await Project.findOne({ where: { id } });
        if (!project) throw new Error(ErrorCode.BadUserInput);
        await Project.update({ name, description }, { where: { id } });
      } else if (name) {
        const project = await Project.findOne({ where: { name } });
        if (!project) throw new Error(ErrorCode.BadUserInput);
        await Project.update({ name, description }, { where: { name } });
      }
    } catch (error) {
      if (error.message === ErrorCode.ValidationError)
        throw new UserInputError(ErrorMessage.NameAlreadyExist, error.errors);
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ProjectNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteResource(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name)
      throw new UserInputError(ErrorMessage.ProjectArgumentError);

    try {
      const project = id
        ? await Project.findOne({ where: { id } })
        : await Project.findOne({ where: { name } });

      if (!project) throw new Error(ErrorCode.BadUserInput);
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
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ProjectNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
}
