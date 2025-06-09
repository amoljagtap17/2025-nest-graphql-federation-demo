import { Module } from '@nestjs/common';
import { LikesAppController } from './likes-app.controller';
import { LikesAppService } from './likes-app.service';

@Module({
  imports: [],
  controllers: [LikesAppController],
  providers: [LikesAppService],
})
export class LikesAppModule {}
