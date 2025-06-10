import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateVoteInput } from './dto/create-vote.input';
import { UpdateVoteInput } from './dto/update-vote.input';
import { Vote } from './entities/vote.entity';

@Injectable()
export class VotesService {
  private votes: Vote[] = [];

  create(createVoteInput: CreateVoteInput): Vote {
    const newVote: Vote = {
      id: randomUUID(),
      ...createVoteInput,
    };

    this.votes.push(newVote);

    return newVote;
  }

  update(updateVoteInput: UpdateVoteInput): Vote {
    const index = this.votes.findIndex(vote => vote.id === updateVoteInput.id);

    if (index === -1) {
      throw new Error(`Vote with ID ${updateVoteInput.id} not found`);
    }

    const updatedVote: Vote = {
      ...this.votes[index],
      ...updateVoteInput,
    };

    this.votes[index] = updatedVote;

    return updatedVote;
  }

  remove(id: string): Vote {
    const index = this.votes.findIndex(vote => vote.id === id);

    if (index === -1) {
      throw new Error(`Vote with ID ${id} not found`);
    }

    const removedVote = this.votes.splice(index, 1)[0];

    return removedVote;
  }

  getTotalVotesForPost(postId: string): number {
    return this.votes
      .filter(vote => vote.postId === postId)
      .reduce((total, vote) => total + vote.value, 0);
  }
}
