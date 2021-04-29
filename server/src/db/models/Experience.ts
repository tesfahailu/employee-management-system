import { DepartmentType } from './Department';
import { Employee } from './Employee';
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
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'experience', modelName: 'Experience', underscored: true })
export class Experience extends Model {
  @Field(() => ID)
  @Column({ primaryKey: true, autoIncrement: true })
  readonly id: number;

  @ForeignKey(() => Employee)
  @Column
  readonly employeeId: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @Field()
  @Column
  start: Date;

  @Field()
  @Column
  end: Date;

  @Field({ nullable: true })
  @Column
  position?: string;

  @Field({ nullable: true })
  @Column
  department?: DepartmentType;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
