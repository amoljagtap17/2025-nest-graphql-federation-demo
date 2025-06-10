import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';

@ObjectType({ description: 'Represents vote on a post' })
@Directive('@key(fields: "id")')
export class Vote {
  @Field(() => ID, { description: 'Unique identifier for the vote' })
  id: string;

  @Field(() => ID, { description: 'Identifier of the post that was voted on' })
  postId: string;

  @Field(() => ID, { description: 'Identifier of the user who voted' })
  userId: string;

  @Field(() => Int, { description: 'Value of the vote, typically 1 for upvote or -1 for downvote', defaultValue: 0 })
  value: number;
}
