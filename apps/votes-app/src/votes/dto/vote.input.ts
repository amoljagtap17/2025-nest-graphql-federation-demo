import { InputType, Field, ID, registerEnumType } from '@nestjs/graphql';

export enum VoteType {
    UP = 'up',
    DOWN = 'down'
}

registerEnumType(VoteType, {
    name: 'VoteType',
    description: 'The type of vote (up or down)',
});

@InputType({ description: 'Input type for voting on a post' })
export class VoteInput {
    @Field(() => ID, { description: 'Identifier of the post to vote on' })
    postId: string;

    @Field(() => ID, { description: 'Identifier of the user casting the vote' })
    userId: string;

    @Field(() => VoteType, { description: 'Type of vote (up or down)' })
    voteType: VoteType;
}
