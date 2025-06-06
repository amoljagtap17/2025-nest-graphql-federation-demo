import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {

  private comments: Comment[] = [];

  create(createCommentInput: CreateCommentInput): Comment {
    const newComment = {
      id: randomUUID(),
      ...createCommentInput,
    };

    this.comments.push(newComment);

    return newComment;
  }

  findAll(): Comment[] {
    return this.comments;
  }

  findOne(id: string): Comment {
    const comment = this.comments.find(comment => comment.id === id);

    if (!comment) {
      throw new Error(`Comment with ID ${id} not found`);
    }

    return comment;
  }

  update(updateCommentInput: UpdateCommentInput): Comment {
    const index = this.comments.findIndex(comment => comment.id === updateCommentInput.id);

    if (index === -1) {
      throw new Error(`Comment with ID ${updateCommentInput.id} not found`);
    }

    const updatedComment = { ...this.comments[index], ...updateCommentInput };

    this.comments[index] = updatedComment;

    return updatedComment;
  }

  remove(id: string): Comment {
    const index = this.comments.findIndex(comment => comment.id === id);

    if (index === -1) {
      throw new Error(`Comment with ID ${id} not found`);
    }

    const removedComment = this.comments.splice(index, 1)[0];

    return removedComment;
  }

  forPost(postId: string): Comment[] {
    return this.comments.filter(comment => comment.postId === postId);
  }
}
