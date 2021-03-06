import { Employee } from './Employee';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { ObjectType, Field, ID, registerEnumType } from 'type-graphql';

export enum LeaveType {
  Vacation = 'VACATION',
  Sick = 'SICK',
  Holiday = 'HOLIDAY',
  Personal = 'PERSONAL',
}

registerEnumType(LeaveType, {
  name: 'LeaveType',
  description: 'Leave Types',
});

@ObjectType()
@Table({ tableName: 'leave', modelName: 'Leave', underscored: true })
export class Leave extends Model {
  @Field(() => ID)
  @Column({ primaryKey: true, autoIncrement: true })
  readonly id: number;

  @ForeignKey(() => Employee)
  @Column
  readonly employeeId: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @Field(() => LeaveType)
  @Column(DataType.ENUM(...Object.keys(LeaveType)))
  type: LeaveType;

  @Field()
  @Column
  to: Date;

  @Field()
  @Column
  from: Date;

  @Field()
  @Column
  description?: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
