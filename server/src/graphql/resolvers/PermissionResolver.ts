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
import { Role } from './../../db/models/Role';
import { Permission } from './../../db/models/Permission';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { Resource } from './../../db/models/Resource';
import { SuccessResponse } from '../types/SuccessResponse';

@ArgsType()
class PermissionArgs {
  @Field({ nullable: true })
  canViewSelf?: boolean;

  @Field({ nullable: true })
  canViewAll?: boolean;

  @Field({ nullable: true })
  canCreate?: boolean;

  @Field({ nullable: true })
  canEdit?: boolean;

  @Field({ nullable: true })
  canDelete?: boolean;
}

@Resolver(() => Permission)
export class PermissionResolver {
  @Query(() => Permission)
  async permission(
    @Arg('id', { nullable: true }) id?: number,
    @Arg('roleId', { nullable: true }) roleId?: number,
    @Arg('resourceId', { nullable: true }) resourceId?: number,
  ): Promise<Permission> {
    if (!id && !(roleId && resourceId))
      throw new UserInputError(ErrorMessage.PermissionArgumentError);
    try {
      const permission = id
        ? await Permission.findOne({
            where: { id },
            include: [Role, Resource],
          })
        : await Permission.findOne({
            where: { roleId, resourceId },
            include: [Role, Resource],
          });

      if (!permission) throw new Error(ErrorCode.BadUserInput);
      return permission;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.PermissionNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [Permission])
  async permissions(): Promise<Permission[]> {
    try {
      return await Permission.findAll({
        include: [Role, Resource],
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async updatePermission(
    @Args()
    { canViewSelf, canViewAll, canCreate, canEdit, canDelete }: PermissionArgs,
    @Arg('id', { nullable: true }) id?: number,
    @Arg('roleId', { nullable: true }) roleId?: number,
    @Arg('resourceId', { nullable: true }) resourceId?: number,
  ): Promise<SuccessResponse> {
    if (!id && !(roleId && resourceId))
      throw new UserInputError(ErrorMessage.PermissionArgumentError);
    try {
      if (id) {
        const permission = await Permission.findOne({ where: { id } });
        if (!permission) throw new Error(ErrorCode.BadUserInput);
        await Permission.update(
          {
            canViewSelf,
            canViewAll,
            canCreate,
            canEdit,
            canDelete,
          },
          { where: { id } },
        );
      } else if (roleId && resourceId) {
        const permission = await Permission.findOne({
          where: { roleId, resourceId },
        });
        if (!permission) throw new Error(ErrorCode.BadUserInput);
        await Permission.update(
          {
            canViewSelf,
            canViewAll,
            canCreate,
            canEdit,
            canDelete,
          },
          { where: { roleId, resourceId } },
        );
      }
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.PermissionNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return {
      success: true,
    };
  }
}
