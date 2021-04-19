import { Project } from './Project';
import { Department } from './Department';
import { Office } from './Office';
import { Salary } from './Salary';
import { EmployeeProject } from './EmployeeProject';
import { Login } from './Login';
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

enum EmployeeType {
  PERMENANT = 'permenant',
  CONTRACT = 'contract',
  FULLTIME = 'fulltime',
  PARTTIME = 'parttime',
}

registerEnumType(EmployeeType, {
  name: 'EmployeeType',
  description: 'Employee Type',
});

@ObjectType()
@Table({ tableName: 'employee', modelName: 'Employee', underscored: true })
export class Employee extends Model {
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

  @Field(() => Login, { nullable: true })
  @HasOne(() => Login)
  login?: Login;

  @Field(() => [EmployeeProject], { nullable: 'itemsAndList' })
  @HasMany(() => EmployeeProject)
  employeeProjects?: EmployeeProject[];

  @Field(() => [Project], { nullable: 'itemsAndList' })
  @BelongsToMany(() => Project, () => EmployeeProject)
  projects?: Project[];

  @Field(() => [Salary], { nullable: 'itemsAndList' })
  @HasMany(() => Salary)
  salaries?: Salary[];

  @Field()
  @Column
  firstName: string;

  @Field()
  @Column
  lastName: string;

  @Field()
  @Column
  fullName: string;

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
  @Column(DataType.ENUM(...Object.values(EmployeeType)))
  type?: string;

  @ForeignKey(() => Department)
  @Column
  departmentId: number;

  @Field(() => Department, { nullable: 'itemsAndList' })
  @BelongsTo(() => Department)
  department?: Department;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
