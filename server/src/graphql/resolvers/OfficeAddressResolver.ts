import { Country } from './../../db/models/Country';
import { State } from './../../db/models/State';
import { OfficeAddress } from './../../db/models/OfficeAddress';
import { Arg, ArgsType, Field, Mutation, Query, Resolver } from 'type-graphql';
import { UserInputError, ApolloError } from 'apollo-server-express';
import { ErrorCode, ErrorMessage } from '../errors/Errors';
import { SuccessResponse } from '../types/SuccessResponse';

@ArgsType()
class OfficeAddressArgs {
  @Field({ nullable: true })
  officeId?: number;

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
export class OfficeAddressResolver {
  @Query(() => OfficeAddress)
  async officeAddress(@Arg('id') id?: number): Promise<OfficeAddress> {
    try {
      const officeAddress = await OfficeAddress.findOne({
        where: { id },
        include: [State, Country],
      });
      if (!officeAddress) throw new Error(ErrorCode.BadUserInput);
      return officeAddress;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.OfficeAddressNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [OfficeAddress])
  async officeAddresses(): Promise<OfficeAddress[]> {
    try {
      const officeAddresses = await OfficeAddress.findAll({
        include: [State, Country],
      });
      if (!officeAddresses) throw new Error(ErrorCode.BadUserInput);
      return officeAddresses;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.OfficeAddressNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createOffice({
    officeId,
    streetAddress1,
    streetAddress2,
    city,
    stateId,
    countryId,
    zipCode,
  }: OfficeAddressArgs): Promise<SuccessResponse> {
    try {
      await OfficeAddress.create({
        officeId,
        streetAddress1,
        streetAddress2,
        city,
        stateId,
        countryId,
        zipCode,
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateOffice(
    @Arg('id') id: number,
    {
      officeId,
      streetAddress1,
      streetAddress2,
      city,
      stateId,
      countryId,
      zipCode,
    }: OfficeAddressArgs,
  ): Promise<SuccessResponse> {
    try {
      const officeAddress = await OfficeAddress.findOne({ where: { id } });
      if (!officeAddress) throw new Error(ErrorCode.BadUserInput);
      await OfficeAddress.update(
        {
          officeId,
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
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.OfficeAddressNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteOffice(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const officeAddress = await OfficeAddress.findOne({ where: { id } });
      if (!officeAddress) throw new UserInputError(ErrorCode.BadUserInput);
      await OfficeAddress.destroy({
        where: { id },
      });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.OfficeAddressNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
}
