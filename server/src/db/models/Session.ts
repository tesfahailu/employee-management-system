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

@ObjectType()
@Table({ tableName: 'session', modelName: 'Session', underscored: true })
export class Session extends Model<Session> {
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

  @BelongsTo(() => EmployeeProject)
  employeeProject: EmployeeProject;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
