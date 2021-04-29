import { EmployeeProject } from './EmployeeProject';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ObjectType, Field, Int } from 'type-graphql';
import { DepartmentType } from './Department';

@ObjectType()
@Table({ tableName: 'session', modelName: 'Session', underscored: true })
export class Session extends Model {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field()
  @Column
  startDate: Date;

  @Field()
  @Column
  endDate: Date;

  @ForeignKey(() => EmployeeProject)
  @Column
  employeeProjectId: number;

  @Field()
  @Column
  task: string;

  @Field()
  @Column
  department: DepartmentType;

  @BelongsTo(() => EmployeeProject)
  employeeProject: EmployeeProject;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
