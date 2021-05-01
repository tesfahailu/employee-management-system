import { Role } from './Role';
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
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'user', modelName: 'User', underscored: true })
export class User extends Model {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field()
  @Column({ unique: true })
  username: string;

  @ForeignKey(() => Employee)
  @Column
  employeeId?: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @ForeignKey(() => Role)
  @Column
  roleId?: number;

  @Field(() => Role, { nullable: true })
  @BelongsTo(() => Role)
  role?: Role;

  @Column
  password: string;

  @Column({ defaultValue: 0 })
  tokenVersion: number;

  @Field({ nullable: true })
  @Column({ defaultValue: new Date() })
  lastLogin?: Date;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
