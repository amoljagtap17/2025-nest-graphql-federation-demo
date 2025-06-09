import { Controller, Get } from '@nestjs/common';
import { LikesAppService } from './likes-app.service';

@Controller()
export class LikesAppController {
  constructor(private readonly likesAppService: LikesAppService) {}

  @Get()
  getHello(): string {
    return this.likesAppService.getHello();
  }
}
