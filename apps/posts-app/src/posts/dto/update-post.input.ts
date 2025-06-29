import { CreatePostInput } from './create-post.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType({ description: 'Input data for updating an existing post' })
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => ID, { description: 'ID of the post to update' })
  id: string;
}
