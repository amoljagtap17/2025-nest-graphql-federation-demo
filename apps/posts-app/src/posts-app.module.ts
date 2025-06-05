import { Module } from '@nestjs/common';
import { PostsAppController } from './posts-app.controller';
import { PostsAppService } from './posts-app.service';

@Module({
  imports: [],
  controllers: [PostsAppController],
  providers: [PostsAppService],
})
export class PostsAppModule {}
