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
      if (!role) throw new Error(ErrorCode.BAD_USER_INPUT);
      return role;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.ROLE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Query(() => [Role])
  async roles(): Promise<Role[]> {
    try {
      return await Role.findAll({
        include: [Resource],
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
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
      if (error.message === ErrorCode.VALIDATION_ERROR)
        throw new UserInputError(ErrorMessage.NAME_ALREADY_EXIST, error.errors);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }

    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateRole(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name) throw new UserInputError(ErrorMessage.ROLE_ARG_ERROR);

    try {
      if (id) {
        const role = await Role.findOne({ where: { id } });
        if (!role) throw new Error(ErrorCode.BAD_USER_INPUT);
        await Role.update({ name, description }, { where: { id } });
      } else if (name) {
        const role = await Role.findOne({ where: { name } });
        if (!role) throw new Error(ErrorCode.BAD_USER_INPUT);
        await Role.update({ name, description }, { where: { name } });
      }
    } catch (error) {
      if (error.message === ErrorCode.VALIDATION_ERROR)
        throw new UserInputError(ErrorMessage.NAME_ALREADY_EXIST, error.errors);
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.ROLE_NOT_FOUND);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteRole(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('name', { nullable: true }) name?: string,
  ): Promise<SuccessResponse> {
    if (!id && !name) throw new UserInputError(ErrorMessage.ROLE_ARG_ERROR);

    try {
      const role = id
        ? await Role.findOne({ where: { id } })
        : await Role.findOne({ where: { name } });

      if (!role) throw new Error(ErrorCode.BAD_USER_INPUT);
      await getSequelize().transaction(async (t) => {
        await Role.destroy({ where: { id: role.id }, transaction: t });
        await Permission.destroy({
          where: { roleId: role.id },
          transaction: t,
        });
      });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.ROLE_NOT_FOUND);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
}
