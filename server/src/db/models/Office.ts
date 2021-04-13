import { OfficeAddress } from './OfficeAddress';
import { Employee } from './Employee';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'office', modelName: 'Office', underscored: true })
export class Office extends Model<Office> {
  @Field(() => ID)
  @Column({ primaryKey: true, autoIncrement: true })
  readonly id: number;

  @Field(() => [Employee], { nullable: 'items' })
  @HasMany(() => Employee)
  employees: Employee[];

  @Field(() => OfficeAddress)
  @HasOne(() => OfficeAddress)
  address: OfficeAddress;

  @Field(() => Int)
  @Column
  capacity: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
