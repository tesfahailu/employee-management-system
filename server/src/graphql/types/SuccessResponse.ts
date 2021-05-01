import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SuccessResponse {
  @Field()
  success: Boolean;
}
