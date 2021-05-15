import { Country } from './Country';
import { State } from './State';
import { Employee } from './Employee';
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
  tableName: 'employee_address',
  modelName: 'EmployeeAddress',
  underscored: true,
})
export class EmployeeAddress extends Model {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @HasMany(() => Employee)
  @Field(() => [Employee])
  employees: Employee[];

  @Field()
  @Column
  streetAddress1: string;

  @Field()
  @Column
  streetAddress2: string;

  @Field()
  @Column
  city: string;

  @ForeignKey(() => State)
  @Column
  stateId: number;

  @Field(() => State)
  @BelongsTo(() => State)
  state: State;

  @ForeignKey(() => Country)
  @Column
  countryId: number;

  @Field(() => Country)
  @BelongsTo(() => Country)
  country: Country;

  @Field()
  @Column
  zipCode: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
