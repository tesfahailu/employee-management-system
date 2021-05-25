import { Employee } from './Employee';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import { ObjectType, Field, Int, registerEnumType } from 'type-graphql';

export enum DepartmentType {
  Marketing = 'MARKETING',
  Operations = 'OPERATIONS',
  Finance = 'FINANCE',
  Sales = 'SALES',
  HumanResources = 'HUMAN RESOURCE',
  Product = 'PRODUCT',
}

registerEnumType(DepartmentType, {
  name: 'DepartmentType',
  description: 'Department Type',
});

@ObjectType()
@Table({ tableName: 'department', modelName: 'Department', underscored: true })
export class Department extends Model {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [Employee], { nullable: 'itemsAndList' })
  @HasMany(() => Employee)
  employees: Employee[];

  @Field(() => DepartmentType)
  @Column(DataType.ENUM(...Object.values(DepartmentType)))
  title: DepartmentType;

  @Field()
  @Column
  description: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
