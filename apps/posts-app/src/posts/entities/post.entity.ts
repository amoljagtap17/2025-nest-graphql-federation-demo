import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType({ description: 'Represents a blog post' })
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID, { description: 'Unique identifier for the post' })
  id: string;

  @Field({ description: 'Title of the post' })
  title: string;

  @Field({ description: 'Content of the post' })
  content: string;

  @Field(() => ID, { description: 'Identifier of the user who authored the post' })
  authorId: string;

  @Field(() => User, { nullable: true, description: 'Author of the post' })
  user?: User
}
