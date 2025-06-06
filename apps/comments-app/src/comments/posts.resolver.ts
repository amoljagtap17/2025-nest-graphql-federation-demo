import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "./entities/post.entity";
import { Comment } from "./entities/comment.entity";
import { CommentsService } from "./comments.service";

@Resolver(() => Post)
export class PostResolver {
    constructor(private readonly commentsService: CommentsService) { }

    @ResolveField(() => [Comment], { name: 'comments', description: 'List of comments associated with the post' })
    public comments(@Parent() post: Post): Comment[] {
        return this.commentsService.forPost(post.id);
    }
}