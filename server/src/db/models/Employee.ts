import { Project } from './Project';
import { Department } from './Department';
import { Office } from './Office';
import { Salary } from './Salary';
import { EmployeeProject } from './EmployeeProject';
import { User } from './User';
import { Experience } from './Experience';
import { EmployeeAddress } from './EmployeeAddress';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
  HasMany,
  HasOne,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ObjectType, Field, Int, registerEnumType } from 'type-graphql';
import { Leave } from './Leave';

export enum EmployeeType {
  Permenant = 'PERMENANT',
  Contract = 'CONTRACT',
  FullTime = 'FULLTIME',
  PartTime = 'PARTTIME',
}

registerEnumType(EmployeeType, {
  name: 'EmployeeType',
  description: 'Employee Type',
});

@ObjectType()
@Table({ tableName: 'employee', modelName: 'Employee', underscored: true })
export class Employee extends Model {
  // @Field({ nullable: true })
  @ForeignKey(() => EmployeeAddress)
  @Column
  employeeAddressId?: number;

  @Field(() => EmployeeAddress, { nullable: true })
  @BelongsTo(() => EmployeeAddress)
  employeeAddress?: EmployeeAddress;

  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [Employee], { nullable: 'itemsAndList' })
  @HasMany(() => Employee)
  supervisors?: Employee[];

  @Field(() => [Experience], { nullable: 'itemsAndList' })
  @HasMany(() => Experience)
  experiences?: Experience[];

  @Field(() => [Leave], { nullable: 'itemsAndList' })
  @HasMany(() => Leave)
  leaves?: Leave[];

  @Field(() => User, { nullable: true })
  @HasOne(() => User)
  login?: User;

  @Field(() => [EmployeeProject], { nullable: 'itemsAndList' })
  @HasMany(() => EmployeeProject)
  employeeProjects?: EmployeeProject[];

  @Field(() => [Project], { nullable: 'itemsAndList' })
  @BelongsToMany(() => Project, () => EmployeeProject)
  projects?: Project[];

  @Field(() => [Salary], { nullable: 'itemsAndList' })
  @HasMany(() => Salary)
  salaries?: Salary[];

  @Field({ nullable: true })
  @Column
  firstName?: string;

  @Field({ nullable: true })
  @Column
  lastName: string;

  @Field(() => String, { name: 'fullName', nullable: true })
  getFullname() {
    return [this.firstName, this.lastName].join(' ');
  }

  @Field({ nullable: true })
  @Column
  mobile?: string;

  @Field({ nullable: true })
  @Column
  email?: string;

  @ForeignKey(() => Employee)
  @Column
  supervisorId?: number;

  @ForeignKey(() => Office)
  @Column
  officeId: number;

  @Field(() => Office, { nullable: true })
  @BelongsTo(() => Office)
  office?: Office;

  @Field(() => EmployeeType, { nullable: true })
  @Column(DataType.ENUM(...Object.keys(EmployeeType)))
  type?: EmployeeType;

  @ForeignKey(() => Department)
  @Column
  departmentId: number;

  @Field(() => Department, { nullable: true })
  @BelongsTo(() => Department)
  department?: Department;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
