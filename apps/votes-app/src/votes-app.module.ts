import { Module } from '@nestjs/common';
import { VotesAppController } from './votes-app.controller';
import { VotesAppService } from './votes-app.service';

@Module({
  imports: [],
  controllers: [VotesAppController],
  providers: [VotesAppService],
})
export class VotesAppModule {}
