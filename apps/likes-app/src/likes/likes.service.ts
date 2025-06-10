import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateLikeInput } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  private likes: Like[] = [];

  create(createLikeInput: CreateLikeInput): Like {
    const newLike: Like = {
      id: randomUUID(),
      ...createLikeInput,
    };

    this.likes.push(newLike);

    return newLike;
  }

  remove(id: string): Like {
    const index = this.likes.findIndex(like => like.id === id);

    if (index === -1) {
      throw new Error(`Like with ID ${id} not found`);
    }

    const removedLike = this.likes.splice(index, 1)[0];

    return removedLike;
  }

  forPost(postId: string): Like[] {
    return this.likes.filter(like => like.postId === postId);
  }
}
