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
export class Employee extends Model<Employee> {
  @ForeignKey(() => EmployeeAddress)
  @Column
  employeeAddressId: EmployeeAddress;

  @Field(() => EmployeeAddress)
  @BelongsTo(() => EmployeeAddress)
  employeeAddress: EmployeeAddress;

  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [Employee], { nullable: 'items' })
  @HasMany(() => Employee)
  supervisors: Employee[];

  @Field(() => [Experience], { nullable: 'items' })
  @HasMany(() => Experience)
  experiences: Experience[];

  @Field(() => [Leave], { nullable: 'items' })
  @HasMany(() => Leave)
  leaves: Leave[];

  @Field(() => Login, { nullable: true })
  @HasOne(() => Login)
  login?: Login;

  @Field(() => [EmployeeProject], { nullable: 'itemsAndList' })
  @HasMany(() => EmployeeProject)
  employeeProjects?: EmployeeProject[];

  @Field(() => [Project], { nullable: 'items' })
  @BelongsToMany(() => Project, () => EmployeeProject)
  projects: Project[];

  @Field(() => [Salary])
  @HasMany(() => Salary)
  salaries: Salary[];

  @Field()
  @Column
  name: string;

  @Field({ nullable: true })
  @Column
  mobile: string;

  @Field({ nullable: true })
  @Column
  email: string;

  @ForeignKey(() => Employee)
  @Column
  supervisorId: number;

  @ForeignKey(() => Office)
  @Column
  officeId: number;

  @Field(() => Office)
  @BelongsTo(() => Office)
  office: Office;

  @Field(() => EmployeeType)
  @Column(DataType.ENUM(...Object.values(EmployeeType)))
  type: number;

  @ForeignKey(() => Department)
  @Column
  departmentId: number;

  @Field(() => Department)
  @BelongsTo(() => Department)
  department: Department;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
