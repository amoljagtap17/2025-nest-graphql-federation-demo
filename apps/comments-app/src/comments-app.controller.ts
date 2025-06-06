import { Controller, Get } from '@nestjs/common';
import { CommentsAppService } from './comments-app.service';

@Controller()
export class CommentsAppController {
  constructor(private readonly commentsAppService: CommentsAppService) {}

  @Get()
  getHello(): string {
    return this.commentsAppService.getHello();
  }
}
