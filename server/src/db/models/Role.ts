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
export class Role extends Model<Role> {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [Login], { nullable: 'itemsAndList' })
  @HasMany(() => Login)
  login?: Login[];

  @BelongsToMany(() => Resource, () => Permission)
  resources: Resource[];

  @Field(() => Permission)
  @HasMany(() => Permission)
  permissions: Permission[];

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
