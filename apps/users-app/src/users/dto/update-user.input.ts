import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType({ description: 'Input data for updating an existing user' })
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID, { description: 'ID of the user to update' })
  id: string;
}
