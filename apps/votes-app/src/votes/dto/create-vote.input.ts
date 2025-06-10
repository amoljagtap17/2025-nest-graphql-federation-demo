import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType({ description: 'Input type for creating a vote' })
export class CreateVoteInput {
  @Field(() => ID, { description: 'Identifier of the post that is being voted on' })
  postId: string;

  @Field(() => ID, { description: 'Identifier of the user who is casting the vote' })
  userId: string;

  @Field(() => Int, { description: 'Value of the vote, typically 1 for upvote or -1 for downvote' })
  value: number;
}
