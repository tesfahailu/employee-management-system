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
@Table({ tableName: 'login', modelName: 'Login', underscored: true })
export class Login extends Model<Login> {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Employee)
  @Column
  employeeId: Employee;

  @BelongsTo(() => Employee)
  employee: Employee;

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @Field(() => Role)
  @BelongsTo(() => Role)
  role: Role;

  @Field()
  @Column
  userName: string;

  @Field()
  @Column
  password: string;

  @Field()
  @Column
  lastLogin: Date;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
