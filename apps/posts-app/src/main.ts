import { NestFactory } from '@nestjs/core';
import { PostsAppModule } from './posts-app.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsAppModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
