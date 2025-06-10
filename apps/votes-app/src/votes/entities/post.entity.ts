import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'Represents a post' })
@Directive('@key(fields: "id")')
export class Post {
    @Field(() => ID, { description: 'Unique identifier for the post' })
    id: string;

    @Field(() => Number, { nullable: true, description: 'Total number of votes for the post', defaultValue: 0 })
    totalVotes?: number;
}