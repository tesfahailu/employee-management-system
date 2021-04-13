import { OfficeAddress } from './OfficeAddress';
import { EmployeeAddress } from './EmployeeAddress';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'country', modelName: 'Country', underscored: true })
export class Country extends Model<Country> {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [EmployeeAddress], { nullable: 'itemsAndList' })
  @HasMany(() => EmployeeAddress)
  employeeAddresses?: EmployeeAddress[];

  @Field(() => [OfficeAddress], { nullable: 'itemsAndList' })
  @HasMany(() => OfficeAddress)
  officeAddresses?: OfficeAddress[];

  @Field()
  @Column
  name: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
