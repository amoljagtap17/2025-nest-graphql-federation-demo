import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { User } from './entities/user.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) { }

  @Mutation(() => Comment, { name: 'createComment', description: 'Create a new comment' })
  createComment(@Args('createCommentInput') createCommentInput: CreateCommentInput): Comment {
    return this.commentsService.create(createCommentInput);
  }

  @Query(() => [Comment], { name: 'comments', description: 'Retrieve all comments' })
  findAll(): Comment[] {
    return this.commentsService.findAll();
  }

  @Query(() => Comment, { name: 'comment', description: 'Retrieve a comment by ID' })
  findOne(@Args('id', { type: () => ID }) id: string): Comment {
    return this.commentsService.findOne(id);
  }

  @Mutation(() => Comment, { name: 'updateComment', description: 'Update an existing comment' })
  updateComment(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput): Comment {
    return this.commentsService.update(updateCommentInput);
  }

  @Mutation(() => Comment, { name: 'removeComment', description: 'Delete a comment by ID' })
  removeComment(@Args('id', { type: () => ID }) id: string): Comment {
    return this.commentsService.remove(id);
  }

  @ResolveField(() => User, { name: 'user', description: 'Retrieve the author of the comment' })
  user(@Parent() comment: Comment): any {
    return { __typename: 'User', id: comment.authorId };
  }
}
