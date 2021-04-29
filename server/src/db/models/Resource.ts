import { Role } from './Role';
import { Permission } from './Permission';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  // HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'resource', modelName: 'Resource', underscored: true })
export class Resource extends Model {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field({ nullable: true })
  @Column
  description?: string;

  @Field(() => [Role], { nullable: 'itemsAndList' })
  @BelongsToMany(() => Role, () => Permission)
  roles?: Array<Role & { permission: Permission }>;

  @Field({ nullable: true })
  permission?: Permission;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
