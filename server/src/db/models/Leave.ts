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

enum LeaveType {
  VACATION = 'vacation',
  SICK = 'sick',
  HOLIDAY = 'holiday',
  PERSONAL = 'personal',
}

registerEnumType(LeaveType, {
  name: 'LeaveType',
  description: 'Leave Types',
});

@ObjectType()
@Table({ tableName: 'leave', modelName: 'Leave', underscored: true })
export class Leave extends Model<Leave> {
  @Field(() => ID)
  @Column({ primaryKey: true, autoIncrement: true })
  readonly id: number;

  @ForeignKey(() => Employee)
  @Column
  readonly employeeId: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @Field(() => LeaveType)
  @Column(DataType.ENUM(...Object.values(LeaveType)))
  type: LeaveType;

  @Field()
  @Column
  status: string;

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
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
