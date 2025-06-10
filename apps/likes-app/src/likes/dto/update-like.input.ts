import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateLikeInput } from './create-like.input';

@InputType({ description: 'Input data for updating an existing like' })
export class UpdateLikeInput extends PartialType(CreateLikeInput) {
  @Field(() => ID, { description: 'Unique identifier for the like' })
  id: string;
}
