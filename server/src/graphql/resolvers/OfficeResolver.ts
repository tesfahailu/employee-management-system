import { OfficeAddress } from './../../db/models/OfficeAddress';
import { Office } from './../../db/models/Office';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { SuccessResponse } from '../types/SuccessResponse';

@Resolver()
export class OfficeResolver {
  @Query(() => Office)
  async leave(@Arg('id') id?: number): Promise<Office> {
    try {
      const office = await Office.findOne({
        where: { id },
        include: [OfficeAddress],
      });
      if (!office) throw new Error(ErrorCode.BAD_USER_INPUT);
      return office;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.OFFICE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Query(() => [Office])
  async offices(): Promise<Office[]> {
    try {
      const offices = await Office.findAll({ include: [OfficeAddress] });
      if (!offices) throw new Error(ErrorCode.BAD_USER_INPUT);
      return offices;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.OFFICE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Mutation(() => SuccessResponse)
  async createOffice(
    @Arg('officeCapacity') officeCapacity?: number,
  ): Promise<SuccessResponse> {
    try {
      await Office.create({ officeCapacity });
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateOffice(
    @Arg('id') id: number,
    @Arg('id') officeCapacity?: number,
  ): Promise<SuccessResponse> {
    try {
      const office = await Office.findOne({ where: { id } });
      if (!office) throw new Error(ErrorCode.BAD_USER_INPUT);
      await Office.update({ officeCapacity }, { where: { id } });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.LEAVE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteOffice(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const office = await Office.findOne({ where: { id } });
      if (!office) throw new UserInputError(ErrorCode.BAD_USER_INPUT);
      await Office.destroy({
        where: { id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.OFFICE_NOT_FOUND);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
}
