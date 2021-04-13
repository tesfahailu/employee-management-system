import { EmployeeProject } from './EmployeeProject';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { ObjectType, Field, Int } from 'type-graphql';
import { Employee } from './Employee';

@ObjectType()
@Table({ tableName: 'project', modelName: 'Project', underscored: true })
export class Project extends Model<Project> {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [EmployeeProject], { nullable: 'items' })
  @HasMany(() => EmployeeProject)
  employProjects: EmployeeProject[];

  @Field(() => [Employee], { nullable: 'itemsAndList' })
  @BelongsToMany(() => Employee, () => EmployeeProject)
  employees?: Employee[];

  @Field()
  @Column
  name: string;

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
