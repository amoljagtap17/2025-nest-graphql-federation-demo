import { CreateCommentInput } from './create-comment.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType({ description: 'Input data for updating an existing comment' })
export class UpdateCommentInput extends PartialType(CreateCommentInput) {
  @Field(() => ID, { description: 'Unique identifier for the comment' })
  id: string;
}
