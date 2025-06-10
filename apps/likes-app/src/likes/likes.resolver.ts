import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { CreateLikeInput } from './dto/create-like.input';;
import { Like } from './entities/like.entity';
import { User } from './entities/user.entity';
import { LikesService } from './likes.service'

@Resolver(() => Like)
export class LikesResolver {
  constructor(private readonly likesService: LikesService) { }

  @Mutation(() => Like)
  createLike(@Args('createLikeInput') createLikeInput: CreateLikeInput) {
    return this.likesService.create(createLikeInput);
  }

  @Mutation(() => Like)
  removeLike(@Args('id', { type: () => ID }) id: string) {
    return this.likesService.remove(id);
  }

  @ResolveField(() => User, { name: 'user', description: 'User who liked the post' })
  user(@Parent() like: Like): any {
    return { __typename: 'User', id: like.userId };
  }
}
