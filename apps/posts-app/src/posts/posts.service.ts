import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { randomUUID } from 'crypto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {

  private posts: Post[] = [];

  create(createPostInput: CreatePostInput): Post {
    const newPost = {
      id: randomUUID(),
      ...createPostInput,
    };

    this.posts.push(newPost);

    return newPost;
  }

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: string): Post {
    const post = this.posts.find(post => post.id === id);

    if (!post) {
      throw new Error(`Post with ID ${id} not found`);
    }

    return post;
  }

  update(updatePostInput: UpdatePostInput): Post {
    const postIndex = this.posts.findIndex(post => post.id === updatePostInput.id);

    if (postIndex === -1) {
      throw new Error(`Post with ID ${updatePostInput.id} not found`);
    }

    const updatedPost = {
      ...this.posts[postIndex],
      ...updatePostInput,
    };

    this.posts[postIndex] = updatedPost;

    return updatedPost;
  }

  remove(id: string): Post {
    const postIndex = this.posts.findIndex(post => post.id === id);

    if (postIndex === -1) {
      throw new Error(`Post with ID ${id} not found`);
    }

    const removedPost = this.posts[postIndex];

    this.posts.splice(postIndex, 1);

    return removedPost;
  }

  forAuthor(authorId: string): Post[] {
    return this.posts.filter(post => post.authorId === authorId);
  }
}
