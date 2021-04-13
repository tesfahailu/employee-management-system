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
import { OfficeAddress } from './OfficeAddress';

@ObjectType()
@Table({ tableName: 'state', modelName: 'State', underscored: true })
export class State extends Model<State> {
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
