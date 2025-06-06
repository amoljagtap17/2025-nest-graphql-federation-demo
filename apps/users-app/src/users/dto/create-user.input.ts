import { InputType, Int, Field } from '@nestjs/graphql';

@InputType({ description: 'Input data for creating a new user' })
export class CreateUserInput {
  @Field({ description: 'Username of the user' })
  username: string;
}
