import { CreateVoteInput } from './create-vote.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType({ description: 'Input type for updating a vote' })
export class UpdateVoteInput extends PartialType(CreateVoteInput) {
  @Field(() => ID, { description: 'Unique identifier for the vote to be updated' })
  id: string;
}
