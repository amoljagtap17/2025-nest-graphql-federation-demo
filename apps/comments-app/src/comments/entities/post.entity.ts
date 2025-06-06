import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Comment } from "./comment.entity";

@ObjectType({ description: 'Represents a post' })
@Directive('@key(fields: "id")')
export class Post {
    @Field(() => ID, { description: 'Unique identifier for the post' })
    id: string;

    @Field(() => [Comment], { nullable: true, description: 'List of comments associated with the post' })
    comments?: Comment[];
}