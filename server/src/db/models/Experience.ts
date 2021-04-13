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
export class Experience extends Model<Experience> {
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

  @Field()
  @Column
  type: string;

  @Field({ nullable: true })
  @Column
  description?: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
