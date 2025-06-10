import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { LikesService } from './likes.service';
import { Like } from './entities/like.entity';
import { CreateLikeInput } from './dto/create-like.input';

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
}
