import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID, { description: 'Unique identifier for the user' })
  id: string;

  @Field({ description: 'Username of the user' })
  username: string;
}
