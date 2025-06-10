import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "./entities/post.entity";
import { VotesService } from "./votes.service";

@Resolver(() => Post)
export class PostResolver {
    constructor(private readonly votesService: VotesService) { }

    @ResolveField(() => Number, { name: 'totalVotes', description: 'Total number of votes for the post' })
    public totalVotes(@Parent() post: Post): number {
        return this.votesService.getTotalVotesForPost(post.id);
    }
}