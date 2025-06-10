import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType({ description: 'Represents a like on a post' })
@Directive('@key(fields: "id")')
export class Like {
  @Field(() => ID, { description: 'Unique identifier for the like' })
  id: string;

  @Field(() => ID, { description: 'Identifier of the post that was liked' })
  postId: string;

  @Field(() => ID, { description: 'Identifier of the user who liked the post' })
  userId: string;

  @Field(() => User, { nullable: true, description: 'User who liked the post' })
  user?: User
}
