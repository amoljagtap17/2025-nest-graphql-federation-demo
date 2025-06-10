import { Controller, Get } from '@nestjs/common';
import { VotesAppService } from './votes-app.service';

@Controller()
export class VotesAppController {
  constructor(private readonly votesAppService: VotesAppService) {}

  @Get()
  getHello(): string {
    return this.votesAppService.getHello();
  }
}
