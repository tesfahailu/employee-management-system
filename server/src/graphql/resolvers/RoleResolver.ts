import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { Resource } from './../../db/models/Resource';
import { Permission } from './../../db/models/Permission';
import { Role } from './../../db/models/Role';
import { getSequelize } from './../../db/sequelize';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { SuccessResponse } from '../types/SuccessResponse';

@Resolver(() => Role)
export class RoleResolver {
  @Query(() => Role)
  async role(@Arg('id') id: number): Promise<Role> {
    try {
      const role = await Role.findOne({
        where: { id },
        include: [Resource],
      });
      if (!role) throw new Error(ErrorCode.BadUserInput);
      return role;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.RoleNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [Role])
  async roles(): Promise<Role[]> {
    try {
      return await Role.findAll({
        include: [Resource],
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createRole(
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<SuccessResponse> {
    try {
      await getSequelize().transaction(async (t) => {
        const role = await Role.create(
          {
            name,
            description,
          },
          { transaction: t },
        );
        const resources = await Resource.findAll();
        await Promise.all(
          resources.map(async (resource) => {
            await Permission.create(
              {
                roleId: role.id,
                resourceId: resource.id,
              },
              { transaction: t },
            );
          }),
        );
      });
    } catch (error) {
      if (error.message === ErrorCode.ValidationError)
        throw new UserInputError(ErrorMessage.NameAlreadyExist, error.errors);
      throw new ApolloError(ErrorMessage.Unknown);
    }

    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateRole(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name) throw new UserInputError(ErrorMessage.RoleArgumentError);

    try {
      if (id) {
        const role = await Role.findOne({ where: { id } });
        if (!role) throw new Error(ErrorCode.BadUserInput);
        await Role.update({ name, description }, { where: { id } });
      } else if (name) {
        const role = await Role.findOne({ where: { name } });
        if (!role) throw new Error(ErrorCode.BadUserInput);
        await Role.update({ name, description }, { where: { name } });
      }
    } catch (error) {
      if (error.message === ErrorCode.ValidationError)
        throw new UserInputError(ErrorMessage.NameAlreadyExist, error.errors);
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.RoleNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteRole(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name) throw new UserInputError(ErrorMessage.RoleArgumentError);

    try {
      const role = id
        ? await Role.findOne({ where: { id } })
        : await Role.findOne({ where: { name } });

      if (!role) throw new Error(ErrorCode.BadUserInput);
      await getSequelize().transaction(async (t) => {
        await Role.destroy({ where: { id: role.id }, transaction: t });
        await Permission.destroy({
          where: { roleId: role.id },
          transaction: t,
        });
      });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.RoleNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
}
