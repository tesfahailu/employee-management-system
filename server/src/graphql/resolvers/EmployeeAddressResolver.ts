import { State } from './../../db/models/State';
import { Country } from './../../db/models/Country';
import { Arg, ArgsType, Field, Mutation, Query, Resolver } from 'type-graphql';
import { UserInputError, ApolloError } from 'apollo-server-express';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { SuccessResponse } from '../types/SuccessResponse';
import { EmployeeAddress } from 'src/db/models/EmployeeAddress';

@ArgsType()
class EmployeeAddressArgs {
  @Field({ nullable: true })
  streetAddress1?: string;

  @Field({ nullable: true })
  streetAddress2?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  stateId?: number;

  @Field({ nullable: true })
  countryId?: number;

  @Field({ nullable: true })
  zipCode?: string;
}

@Resolver()
export class EmployeeAddressResolver {
  @Query(() => EmployeeAddress)
  async employeeAddress(@Arg('id') id?: number): Promise<EmployeeAddress> {
    try {
      const employeeAddress = await EmployeeAddress.findOne({
        where: { id },
        include: [State, Country],
      });
      if (!employeeAddress) throw new Error(ErrorCode.BAD_USER_INPUT);
      return employeeAddress;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EMPLOYEE_ADDRESS_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Query(() => [EmployeeAddress])
  async employeeAddresses(): Promise<EmployeeAddress[]> {
    try {
      const employeeAddresses = await EmployeeAddress.findAll({
        include: [State, Country],
      });
      if (!employeeAddresses) throw new Error(ErrorCode.BAD_USER_INPUT);
      return employeeAddresses;
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EMPLOYEE_ADDRESS_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Mutation(() => SuccessResponse)
  async createOffice({
    streetAddress1,
    streetAddress2,
    city,
    stateId,
    countryId,
    zipCode,
  }: EmployeeAddressArgs): Promise<SuccessResponse> {
    try {
      await EmployeeAddress.create({
        streetAddress1,
        streetAddress2,
        city,
        stateId,
        countryId,
        zipCode,
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateOffice(
    @Arg('id') id: number,
    {
      streetAddress1,
      streetAddress2,
      city,
      stateId,
      countryId,
      zipCode,
    }: EmployeeAddressArgs,
  ): Promise<SuccessResponse> {
    try {
      const employeeAddress = await EmployeeAddress.findOne({ where: { id } });
      if (!employeeAddress) throw new Error(ErrorCode.BAD_USER_INPUT);
      await EmployeeAddress.update(
        {
          streetAddress1,
          streetAddress2,
          city,
          stateId,
          countryId,
          zipCode,
        },
        { where: { id } },
      );
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EMPLOYEE_ADDRESS_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteOffice(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const employeeAddress = await EmployeeAddress.findOne({ where: { id } });
      if (!employeeAddress) throw new UserInputError(ErrorCode.BAD_USER_INPUT);
      await EmployeeAddress.destroy({
        where: { id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EMPLOYEE_ADDRESS_NOT_FOUND);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
}
