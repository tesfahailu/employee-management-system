import {
  Arg,
  Args,
  ArgsType,
  Field,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { ApolloError, UserInputError } from 'apollo-server-express';
import validator from 'validator';
import { Employee, EmployeeType } from './../../db/models/Employee';
import { ErrorMessage, ErrorCode } from './../errors/Errors';
import { Leave } from './../../db/models/Leave';
import { Experience } from './../../db/models/Experience';
import { Salary } from './../../db/models/Salary';
import { EmployeeProject } from './../../db/models/EmployeeProject';
import { User } from '../../db/models/User';
import { SuccessResponse } from '../types/SuccessResponse';
import { getSequelize } from './../../db/sequelize';

const modelIncludeArray = [User, EmployeeProject, Salary, Experience, Leave];
@ArgsType()
class EmployeeArgs {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => EmployeeType, { nullable: true })
  type?: EmployeeType;

  @Field({ nullable: true })
  employeeAddressId?: number;

  @Field({ nullable: true })
  supervisorId?: number;

  @Field({ nullable: true })
  officeId?: number;

  @Field({ nullable: true })
  departmentId?: number;
}

interface ValidationErrorOjbect {
  email?: string;
  mobile?: string;
}

@Resolver(() => Employee)
export class EmployeeResolver {
  @Query(() => Employee)
  async employee(@Arg('id') id: number): Promise<Employee> {
    try {
      const employee = await Employee.findOne({
        where: { id },
        include: modelIncludeArray,
      });
      if (!employee) throw new Error(ErrorCode.BadUserInput);
      return employee;
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.EmployeeNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Query(() => [Employee])
  async employees(): Promise<Employee[]> {
    try {
      return await Employee.findAll({
        include: modelIncludeArray,
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.Unknown);
    }
  }

  @Mutation(() => SuccessResponse)
  async createEmployee(
    @Args()
    {
      firstName,
      lastName,
      mobile,
      email,
      type,
      employeeAddressId,
      supervisorId,
      officeId,
      departmentId,
    }: EmployeeArgs,
  ): Promise<SuccessResponse> {
    const validationErrors: ValidationErrorOjbect = {};

    if (email && !validator.isEmail(email))
      validationErrors.email = ErrorMessage.EmployeeInvalidEmail;

    if (mobile && !validator.isMobilePhone(mobile))
      validationErrors.mobile = ErrorMessage.EmployeeInvalidMobile;

    if (Object.keys(validationErrors).length > 0) {
      throw new UserInputError(ErrorMessage.EmployeeValidationError, {
        validationErrors,
      });
    }

    try {
      await Employee.create({
        firstName,
        lastName,
        mobile,
        email,
        type,
        employeeAddressId,
        supervisorId,
        officeId,
        departmentId,
      });
    } catch (error) {
      console.error(error);
      throw new ApolloError(ErrorMessage.Unknown);
    }

    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async updateEmployee(
    @Arg('id') id: number,
    @Args()
    {
      firstName,
      lastName,
      mobile,
      email,
      type,
      employeeAddressId,
      supervisorId,
      officeId,
      departmentId,
    }: EmployeeArgs,
  ): Promise<SuccessResponse> {
    if (!id) throw new UserInputError(ErrorMessage.EmployeeArgumentError);
    const validationErrors: ValidationErrorOjbect = {};

    if (email && !validator.isEmail(email))
      validationErrors.email = ErrorMessage.EmployeeInvalidEmail;

    if (mobile && !validator.isMobilePhone(mobile))
      validationErrors.mobile = ErrorMessage.EmployeeInvalidMobile;

    if (Object.keys(validationErrors).length > 0) {
      throw new UserInputError(ErrorMessage.EmployeeValidationError, {
        validationErrors,
      });
    }

    try {
      const employee = await Employee.findOne({ where: { id } });
      if (!employee) throw new Error(ErrorCode.BadUserInput);

      await Employee.update(
        {
          firstName,
          lastName,
          mobile,
          email,
          type,
          employeeAddressId,
          supervisorId,
          officeId,
          departmentId,
        },
        { where: { id } },
      );
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.EmployeeNotFound);
      throw new ApolloError(ErrorMessage.Unknown);
    }

    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteEmployee(@Arg('id') id: number): Promise<SuccessResponse> {
    try {
      const employee = await Employee.findOne({ where: { id } });
      if (!employee) throw new Error(ErrorCode.BadUserInput);
      await getSequelize().transaction(async (t) => {
        await User.destroy({ where: { employeeId: id }, transaction: t });
        await EmployeeProject.destroy({
          where: { employeeId: id },
          transaction: t,
        });
        await Salary.destroy({ where: { employeeId: id }, transaction: t });
        await Experience.destroy({ where: { employeeId: id }, transaction: t });
        await Leave.destroy({ where: { employeeId: id }, transaction: t });
        await Employee.destroy({ where: { id }, transaction: t });
      });
    } catch (error) {
      if (error.message === ErrorCode.BadUserInput)
        throw new UserInputError(ErrorMessage.EmployeeNotFound);
      throw new UserInputError(ErrorMessage.Unknown);
    }
    return { success: true };
  }
}
