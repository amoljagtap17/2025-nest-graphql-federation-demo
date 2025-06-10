import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { VotesService } from './votes.service';
import { Vote } from './entities/vote.entity';
import { CreateVoteInput } from './dto/create-vote.input';
import { UpdateVoteInput } from './dto/update-vote.input';

@Resolver(() => Vote)
export class VotesResolver {
  constructor(private readonly votesService: VotesService) { }

  @Mutation(() => Vote)
  createVote(@Args('createVoteInput') createVoteInput: CreateVoteInput) {
    return this.votesService.create(createVoteInput);
  }

  @Mutation(() => Vote)
  updateVote(@Args('updateVoteInput') updateVoteInput: UpdateVoteInput) {
    return this.votesService.update(updateVoteInput);
  }

  @Mutation(() => Vote)
  removeVote(@Args('id', { type: () => ID }) id: string) {
    return this.votesService.remove(id);
  }
}
