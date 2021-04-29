import { UserInputError, ApolloError } from 'apollo-server-express';
import { ErrorCode, ErrorMessage } from './../errors/Errors';
import { DepartmentType } from './../../db/models/Department';
import { Experience } from './../../db/models/Experience';
import {
  Arg,
  Args,
  ArgsType,
  Field,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { SuccessResponse } from '../types/Common';

@ArgsType()
class ExperienceArgs {
  @Field({ nullable: true })
  start?: Date;

  @Field({ nullable: true })
  end?: Date;

  @Field({ nullable: true })
  position?: string;

  @Field({ nullable: true })
  department?: DepartmentType;
}

@Resolver()
export class ExperienceResolver {
  //experience
  @Query(() => Experience)
  async experience(@Arg('id') id?: number): Promise<Experience> {
    try {
      const experience = await Experience.findOne({ where: { id } });
      if (!experience) throw new Error(ErrorCode.BAD_USER_INPUT);
      return experience;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EXPERIENCE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }
  //experiences
  @Query(() => [Experience])
  async experiences(
    @Arg('employeeId') employeeId: number,
  ): Promise<Experience[]> {
    try {
      const experiences = await Experience.findAll({
        where: { id: employeeId },
      });
      if (!experiences) throw new Error(ErrorCode.BAD_USER_INPUT);
      return experiences;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EXPERIENCE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Mutation(() => SuccessResponse)
  async createExperience(
    @Args() { start, end, position, department }: ExperienceArgs,
  ): Promise<SuccessResponse> {
    try {
      await Experience.create({ start, end, position, department });
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
  @Mutation(() => SuccessResponse)
  async updateExperience(
    @Arg('id') id: number,
    @Args() { start, end, position, department }: ExperienceArgs,
  ): Promise<SuccessResponse> {
    try {
      const experience = await Experience.findOne({ where: { id } });
      if (!experience) throw new Error(ErrorCode.BAD_USER_INPUT);
      await Experience.update(
        { start, end, position, department },
        { where: { id } },
      );
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EXPERIENCE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteExperience(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const experience = await Experience.findOne({ where: { id } });
      if (!experience) throw new UserInputError(ErrorCode.BAD_USER_INPUT);
      await Experience.destroy({
        where: { id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EXPERIENCE_NOT_FOUND);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
}
