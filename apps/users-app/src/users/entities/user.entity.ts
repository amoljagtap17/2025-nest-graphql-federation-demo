import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID, { description: 'Unique identifier for the user' })
  id: string;

  @Field({ description: 'Username of the user' })
  username: string;
}
