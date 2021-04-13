import { Role } from './Role';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { ObjectType, Field, Int } from 'type-graphql';
import { Permission } from './Permission';

@ObjectType()
@Table({ tableName: 'resource', modelName: 'Resource', underscored: true })
export class Resource extends Model<Resource> {
  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Field(() => [Role], { nullable: 'itemsAndList' })
  @BelongsToMany(() => Role, () => Permission)
  roles?: Role[];

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
