import { NestFactory } from '@nestjs/core';
import { CommentsAppModule } from './comments-app.module';

async function bootstrap() {
  const app = await NestFactory.create(CommentsAppModule);
  await app.listen(process.env.port ?? 3003);
}
bootstrap();
