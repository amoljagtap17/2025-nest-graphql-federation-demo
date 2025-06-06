import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
