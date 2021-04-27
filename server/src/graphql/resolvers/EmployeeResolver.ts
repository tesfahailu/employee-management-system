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
import { Login } from './../../db/models/Login';
import { SuccessResponse } from '../types/Common';
import { getSequelize } from './../../db/sequelize';

// const modelIncludeArray = [Login, EmployeeProject, Salary, Experience, Leave];
@ArgsType()
class EmployeeArgs {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => EmployeeType, { nullable: true })
  type?: string;

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
        // include: modelIncludeArray,
      });
      if (!employee) throw new Error(ErrorCode.BAD_USER_INPUT);
      return employee;
    } catch (error) {
      console.error(error);
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EMPLOYEE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }
  }

  @Query(() => [Employee])
  async employees(): Promise<Employee[]> {
    try {
      return await Employee.findAll({
        // include: modelIncludeArray,
      });
    } catch (error) {
      throw new ApolloError(ErrorMessage.UNKNOWN);
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
      validationErrors.email = ErrorMessage.EMPLOYEE_INVALID_EMAIL;

    if (mobile && !validator.isMobilePhone(mobile))
      validationErrors.mobile = ErrorMessage.EMPLOYEE_INVALID_MOBILE;

    if (Object.keys(validationErrors).length > 0) {
      throw new UserInputError(ErrorMessage.EMPLOYEE_VALIDATION_ERROR, {
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
      throw new ApolloError(ErrorMessage.UNKNOWN);
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
    if (!id) throw new UserInputError(ErrorMessage.EMPLOYEE_ARG_ERROR);
    const validationErrors: ValidationErrorOjbect = {};

    if (email && !validator.isEmail(email))
      validationErrors.email = ErrorMessage.EMPLOYEE_INVALID_EMAIL;

    if (mobile && !validator.isMobilePhone(mobile))
      validationErrors.mobile = ErrorMessage.EMPLOYEE_INVALID_MOBILE;

    if (Object.keys(validationErrors).length > 0) {
      throw new UserInputError(ErrorMessage.EMPLOYEE_VALIDATION_ERROR, {
        validationErrors,
      });
    }

    try {
      const employee = await Employee.findOne({ where: { id } });
      if (!employee) throw new Error(ErrorCode.BAD_USER_INPUT);

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
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EMPLOYEE_NOT_FOUND);
      throw new ApolloError(ErrorMessage.UNKNOWN);
    }

    return { success: true };
  }

  @Mutation(() => SuccessResponse)
  async deleteEmployee(@Arg('id') id: number): Promise<SuccessResponse> {
    if (!id) throw new UserInputError(ErrorMessage.EMPLOYEE_ARG_ERROR);
    try {
      const employee = await Employee.findOne({ where: { id } });
      if (!employee) throw new Error(ErrorCode.BAD_USER_INPUT);
      await getSequelize().transaction(async (t) => {
        await Login.destroy({ where: { employeeId: id }, transaction: t });
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
      console.log(error);
      if (error.message === ErrorCode.BAD_USER_INPUT)
        throw new UserInputError(ErrorMessage.EMPLOYEE_NOT_FOUND);
      throw new UserInputError(ErrorMessage.UNKNOWN);
    }
    return { success: true };
  }
}
