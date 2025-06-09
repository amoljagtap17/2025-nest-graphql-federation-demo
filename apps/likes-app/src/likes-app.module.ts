import { Module } from '@nestjs/common';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [LikesModule],
  controllers: [],
  providers: [],
})
export class LikesAppModule { }
