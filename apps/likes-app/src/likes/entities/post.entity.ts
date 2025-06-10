import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Like } from "./like.entity";

@ObjectType({ description: 'Represents a post' })
@Directive('@key(fields: "id")')
export class Post {
    @Field(() => ID, { description: 'Unique identifier for the post' })
    id: string;

    @Field(() => [Like], { nullable: true, description: 'List of likes associated with the post' })
    likes?: Like[]
}