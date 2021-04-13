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

enum DepartmentType {
  MARKETING = 'marketing',
  OPERATIONS = 'operations',
  SALES = 'sales',
  HUMAN_RESOURCES = 'human resources',
  ENGINEERING = 'engineering',
}

registerEnumType(DepartmentType, {
  name: 'DepartmentType',
  description: 'Department Type',
});

@ObjectType()
@Table({ tableName: 'department', modelName: 'Department', underscored: true })
export class Department extends Model<Department> {
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
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
