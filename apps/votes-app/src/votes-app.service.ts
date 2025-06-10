import { Injectable } from '@nestjs/common';

@Injectable()
export class VotesAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
