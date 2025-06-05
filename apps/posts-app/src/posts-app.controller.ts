import { Controller, Get } from '@nestjs/common';
import { PostsAppService } from './posts-app.service';

@Controller()
export class PostsAppController {
  constructor(private readonly postsAppService: PostsAppService) {}

  @Get()
  getHello(): string {
    return this.postsAppService.getHello();
  }
}
