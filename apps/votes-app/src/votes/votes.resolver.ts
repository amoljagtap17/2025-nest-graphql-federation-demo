import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { VotesService } from './votes.service';
import { Vote } from './entities/vote.entity';
import { VoteInput } from './dto/vote.input';

@Resolver(() => Vote)
export class VotesResolver {
  constructor(private readonly votesService: VotesService) { }

  @Mutation(() => Vote, { nullable: true, description: 'Vote on a post (upvote or downvote). Returns null if vote is removed (toggled off)' })
  vote(@Args('voteInput') voteInput: VoteInput): Vote | null {
    return this.votesService.vote(voteInput);
  }
}
