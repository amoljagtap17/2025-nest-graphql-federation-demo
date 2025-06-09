import { Injectable } from '@nestjs/common';

@Injectable()
export class LikesAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
