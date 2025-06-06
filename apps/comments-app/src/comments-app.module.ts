import { Module } from '@nestjs/common';
import { CommentsAppController } from './comments-app.controller';
import { CommentsAppService } from './comments-app.service';

@Module({
  imports: [],
  controllers: [CommentsAppController],
  providers: [CommentsAppService],
})
export class CommentsAppModule {}
