import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType({ description: 'Represents a comment on a post' })
@Directive('@key(fields: "id")')
export class Comment {
  @Field(() => ID, { description: 'Unique identifier for the comment' })
  id: string;

  @Field(() => String, { description: 'Content of the comment' })
  content: string;

  @Field(() => ID, { description: 'Identifier of the post the comment belongs to' })
  postId: string;

  @Field(() => ID, { description: 'Identifier of the user who authored the comment' })
  authorId: string;

  @Field(() => User, { nullable: true, description: 'Author of the comment' })
  user?: User;
}
