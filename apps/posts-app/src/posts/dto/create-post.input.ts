import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field({ description: 'Title of the post' })
  title: string;

  @Field({ description: 'Content of the post' })
  content: string;
}
