import { Resource } from './Resource';
import { Login } from './Login';
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
import { Permission } from './Permission';

@ObjectType()
@Table({ tableName: 'role', modelName: 'Role', underscored: true })
export class Role extends Model {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [Login], { nullable: 'itemsAndList' })
  @HasMany(() => Login)
  login?: Login[];

  @Field(() => [Resource], { nullable: 'itemsAndList' })
  @BelongsToMany(() => Resource, () => Permission)
  resources?: Array<Resource & { permission: Permission }>;

  @Field({ nullable: true })
  permission?: Permission;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field({ nullable: true })
  @Column
  description?: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
