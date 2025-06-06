import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType({ description: 'Input data for creating a new comment' })
export class CreateCommentInput {
  @Field(() => String, { description: 'Content of the comment' })
  content: string;

  @Field(() => ID, { description: 'Identifier of the post the comment belongs to' })
  postId: string;

  @Field(() => ID, { description: 'Identifier of the user who authored the comment' })
  authorId: string;
}
