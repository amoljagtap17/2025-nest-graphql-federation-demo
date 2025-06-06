import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'Represents a blog post' })
export class Post {
  @Field(() => ID, { description: 'Unique identifier for the post' })
  id: string;

  @Field({ description: 'Title of the post' })
  title: string;

  @Field({ description: 'Content of the post' })
  content: string;
}
