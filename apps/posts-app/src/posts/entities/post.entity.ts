import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID, { description: 'ID of the post' })
  id: string;

  @Field({ description: 'Title of the post' })
  title: string;

  @Field({ description: 'Content of the post' })
  content: string;
}
