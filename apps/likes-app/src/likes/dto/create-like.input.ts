import { InputType, Int, Field } from '@nestjs/graphql';

@InputType({ description: 'Input data for creating a new like' })
export class CreateLikeInput {
  @Field(() => String, { description: 'Identifier of the post that is liked' })
  postId: string;

  @Field(() => String, { description: 'Identifier of the user who liked the post' })
  userId: string;
}
