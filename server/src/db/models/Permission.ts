import { Role } from './Role';
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
import { Resource } from './Resource';

@ObjectType()
@Table({ tableName: 'permission', modelName: 'Permission', underscored: true })
export class Permission extends Model {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @Field(() => Role, { nullable: true })
  @BelongsTo(() => Role)
  role?: Role;

  @ForeignKey(() => Resource)
  @Column
  resourceId: number;

  @Field(() => Resource, { nullable: true })
  @BelongsTo(() => Resource)
  resource?: Resource;

  @Field()
  @Column
  canViewSelf: Boolean;

  @Field()
  @Column
  canViewAll: Boolean;

  @Field()
  @Column
  canCreate: Boolean;

  @Field()
  @Column
  canEdit: Boolean;

  @Field()
  @Column
  canDelete: Boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
