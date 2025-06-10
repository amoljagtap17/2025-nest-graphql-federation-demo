import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "./entities/post.entity";
import { Like } from "./entities/like.entity";
import { LikesService } from "./likes.service";

@Resolver(() => Post)
export class PostResolver {
    constructor(private readonly likesService: LikesService) { }

    @ResolveField(() => [Like], { name: 'likes', description: 'List of likes associated with the post' })
    public comments(@Parent() post: Post): Like[] {
        return this.likesService.forPost(post.id);
    }
}