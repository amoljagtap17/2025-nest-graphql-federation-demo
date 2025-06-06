import { Resolver, Query, Mutation, Args, Int, ID, ResolveField, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { User } from './entities/user.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  @Mutation(() => Post, { name: 'createPost', description: 'Create a new post' })
  createPost(@Args('createPostInput') createPostInput: CreatePostInput): Post {
    return this.postsService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts', description: 'Retrieve all posts' })
  findAll(): Post[] {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post', description: 'Retrieve a post by ID' })
  findOne(@Args('id', { type: () => ID }) id: string): Post {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post, { name: 'updatePost', description: 'Update an existing post' })
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput): Post {
    return this.postsService.update(updatePostInput);
  }

  @Mutation(() => Post, { name: 'removePost', description: 'Delete a post by ID' })
  removePost(@Args('id', { type: () => ID }) id: string): Post {
    return this.postsService.remove(id);
  }

  @ResolveField(() => User, { name: 'user', description: 'Retrieve the author of the post' })
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}
