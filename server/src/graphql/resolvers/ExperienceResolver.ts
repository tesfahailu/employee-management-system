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
import { SuccessResponse } from '../types/SuccessResponse';

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
      if (!experience) throw new Error(ErrorCode.BadUserInput);
      return experience;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ExperienceNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
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
      if (!experiences) throw new Error(ErrorCode.BadUserInput);
      return experiences;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ExperienceNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createExperience(
    @Args() { start, end, position, department }: ExperienceArgs,
  ): Promise<SuccessResponse> {
    try {
      await Experience.create({ start, end, position, department });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
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
      if (!experience) throw new Error(ErrorCode.BadUserInput);
      await Experience.update(
        { start, end, position, department },
        { where: { id } },
      );
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ExperienceNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteExperience(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const experience = await Experience.findOne({ where: { id } });
      if (!experience) throw new UserInputError(ErrorCode.BadUserInput);
      await Experience.destroy({
        where: { id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.ExperienceNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
}
