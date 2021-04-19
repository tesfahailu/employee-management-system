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
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'login', modelName: 'Login', underscored: true })
export class Login extends Model {
  @Field()
  @Column({ primaryKey: true })
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
