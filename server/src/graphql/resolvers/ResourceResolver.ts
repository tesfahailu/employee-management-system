import { Permission } from './../../db/models/Permission';
import { ErrorCode, ErrorMessage } from './../errors/Errors';
import { Resource } from './../../db/models/Resource';
import { Role } from './../../db/models/Role';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { SuccessResponse } from '../types/SuccessResponse';
import { getSequelize } from './../../db/sequelize';

@Resolver()
export class ResourceResolver {
  @Query(() => Resource)
  async resource(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
  ): Promise<Resource> {
    if (!id && !name)
      throw new UserInputError(ErrorMessage.ResourceArgumentError);
    try {
      const resource = id
        ? await Resource.findOne({
            where: { id },
            include: [{ model: Role }],
          })
        : await Resource.findOne({
            where: { name },
            include: [{ model: Role }],
          });
      if (!resource) throw new Error(ErrorCode.BadUserInput);
      return resource;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ResourceNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [Resource])
  async resources(): Promise<Resource[]> {
    try {
      return await Resource.findAll({
        include: [Role],
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createResource(
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description?: string,
  ) {
    try {
      await Resource.create({ name, description });
    } catch (error) {
      if (error.message === ErrorCode.ValidationError)
        throw new UserInputError(ErrorMessage.NameAlreadyExist, error.errors);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateResource(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name)
      throw new UserInputError(ErrorMessage.ResourceArgumentError);

    try {
      if (id) {
        const resource = await Resource.findOne({ where: { id } });
        if (!resource) throw new Error(ErrorCode.BadUserInput);
        await Resource.update({ name, description }, { where: { id } });
      } else if (name) {
        const resource = await Resource.findOne({ where: { name } });
        if (!resource) throw new Error(ErrorCode.BadUserInput);
        await Resource.update({ name, description }, { where: { name } });
      }
    } catch (error) {
      if (error.message === ErrorCode.ValidationError)
        throw new UserInputError(ErrorMessage.NameAlreadyExist, error.errors);
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ResourceNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteResource(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name)
      throw new UserInputError(ErrorMessage.ResourceArgumentError);

    try {
      const resource = id
        ? await Resource.findOne({ where: { id } })
        : await Resource.findOne({ where: { name } });

      if (!resource) throw new Error(ErrorCode.BadUserInput);
      await getSequelize().transaction(async (t) => {
        await Resource.destroy({ where: { id }, transaction: t });
        await Permission.destroy({
          where: { resourceId: resource.id },
          transaction: t,
        });
      });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ResourceNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
}
