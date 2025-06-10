import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { VoteInput, VoteType } from './dto/vote.input';
import { Vote } from './entities/vote.entity';

@Injectable()
export class VotesService {
  private votes: Vote[] = [];

  vote(voteInput: VoteInput): Vote | null {
    const voteValue = voteInput.voteType === VoteType.UP ? 1 : -1;

    // Check if user has already voted on this post
    const existingVoteIndex = this.votes.findIndex(
      vote => vote.postId === voteInput.postId && vote.userId === voteInput.userId
    );

    if (existingVoteIndex !== -1) {
      // Update existing vote
      const existingVote = this.votes[existingVoteIndex];

      if (existingVote.value === voteValue) {
        // Same vote type - remove the vote (toggle off)
        this.votes.splice(existingVoteIndex, 1);

        return null;
      } else {
        // Different vote type - update the vote
        existingVote.value = voteValue;

        return existingVote;
      }
    } else {
      // Create new vote
      const newVote: Vote = {
        id: randomUUID(),
        postId: voteInput.postId,
        userId: voteInput.userId,
        value: voteValue,
      };

      this.votes.push(newVote);

      return newVote;
    }
  }

  getTotalVotesForPost(postId: string): number {
    return this.votes
      .filter(vote => vote.postId === postId)
      .reduce((total, vote) => total + vote.value, 0);
  }
}
