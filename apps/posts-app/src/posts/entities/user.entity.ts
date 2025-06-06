import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Post } from "./post.entity";

@ObjectType({ description: 'Represents a user' })
@Directive('@key(fields: "id")')
export class User {
    @Field(() => ID, { description: 'Unique identifier for the user' })
    id: string;

    @Field(() => [Post], { nullable: true, description: 'List of posts created by the user' })
    posts?: Post[]
}