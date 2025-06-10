import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'Represents a user' })
@Directive('@key(fields: "id")')
export class User {
    @Field(() => ID, { description: 'Unique identifier for the user' })
    id: string;
}