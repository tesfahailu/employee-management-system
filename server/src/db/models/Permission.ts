import { Resource } from './Resource';
import { Role } from './Role';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
@Table({
  tableName: 'permission',
  modelName: 'Permission',
  underscored: true,
})
export class Permission extends Model<Permission> {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @ForeignKey(() => Resource)
  @Column
  resourceId: number;

  @Field()
  @Column
  canView: boolean;

  @Field()
  @Column
  canCreate: boolean;

  @Field()
  @Column
  canEdit: boolean;

  @Field()
  @Column
  canDelete: boolean;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
