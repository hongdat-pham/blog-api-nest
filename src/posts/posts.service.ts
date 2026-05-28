import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}
@Injectable()
export class PostsService {
  private posts: Post[] = [];
  private nextId = 1;
  constructor(private readonly logger: LoggerService) {}
  findAll(): Post[] {
    this.logger.log('PostsService', 'findAll called');
    return this.posts;
  }

  findOne(id: number): Post {
    this.logger.log('PostsService', `findOne called — id: ${id}`);
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      throw new NotFoundException(`Post #${id} not found`);
    }
    return post;
  }

  create(dto: CreatePostDto): Post {
    this.logger.log('PostsService', `create called — title: ${dto.title}`);
    const newPost: Post = {
      id: this.nextId++,
      title: dto.title,
      content: dto.content,
      createdAt: new Date(),
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, dto: UpdatePostDto): Post {
    this.logger.log('PostsService', `update called — id: ${id}`);
    const post = this.findOne(id);
    if (dto.title !== undefined) post.title = dto.title;
    if (dto.content !== undefined) post.content = dto.content;
    return post;
  }

  remove(id: number): { message: string } {
    this.logger.log('PostsService', `remove called — id: ${id}`);
    const index = this.posts.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Post #${id} not found`);
    }
    this.posts.splice(index, 1);
    return { message: `Post #${id} deleted` };
  }
}
