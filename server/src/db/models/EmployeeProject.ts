import { Project } from './Project';
import { Employee } from './Employee';
import { Session } from './Session';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Table({
  tableName: 'employee_project',
  modelName: 'EmployeeProject',
  underscored: true,
})
export class EmployeeProject extends Model<EmployeeProject> {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [Session], { nullable: 'itemsAndList' })
  @HasMany(() => Session)
  sessions?: Session[];

  @ForeignKey(() => Employee)
  @Column
  employeeId: number;

  @Field(() => Employee)
  @BelongsTo(() => Employee)
  employee: Employee;

  @ForeignKey(() => Project)
  @Column
  projectId: number;

  @Field(() => Project)
  @BelongsTo(() => Project)
  project: Project;

  @Field()
  @Column
  addDate: Date;

  @Field({ nullable: true })
  @Column
  removeDate: Date;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
