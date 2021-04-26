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
import { SuccessResponse } from './../types/Common';

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
    @Arg('id') id: number,
    @Arg('roleId', { nullable: true }) roleId?: number,
    @Arg('resourceId', { nullable: true }) resourceId?: number,
  ): Promise<Permission> {
    if (!id && !(roleId && resourceId))
      throw new UserInputError(ErrorMessage.PERMISSION_ARG_ERROR);
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

      if (!permission) throw new Error(ErrorCode.BAD_USER_INPUT);
      return permission;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.PERMISSION_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Query(() => [Permission])
  async permissions(): Promise<Permission[]> {
    try {
      const permissions = await Permission.findAll({
        include: [Role, Resource],
      });
      return permissions;
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
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
      throw new UserInputError(ErrorMessage.PERMISSION_ARG_ERROR);
    try {
      if (id) {
        const permission = await Permission.findOne({ where: { id } });
        if (!permission) throw new Error(ErrorCode.BAD_USER_INPUT);
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
        if (!permission) throw new Error(ErrorCode.BAD_USER_INPUT);
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
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.PERMISSION_NOT_FOUND);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return {
      success: true,
    };
  }
}
