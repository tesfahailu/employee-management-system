import { State } from './State';
import { Country } from './Country';
import { Office } from './Office';
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
@Table({
  tableName: 'office_address',
  modelName: 'OfficeAddress',
  underscored: true,
})
export class OfficeAddress extends Model {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Office)
  @Column
  officeId: number;

  @BelongsTo(() => Office)
  office: Office;

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
