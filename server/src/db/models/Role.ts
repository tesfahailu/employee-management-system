import { Resource } from './Resource';
import { User } from './User';
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

  @Field(() => [User], { nullable: 'itemsAndList' })
  @HasMany(() => User)
  login?: User[];

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
