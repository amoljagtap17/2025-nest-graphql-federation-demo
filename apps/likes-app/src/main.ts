import { NestFactory } from '@nestjs/core';
import { LikesAppModule } from './likes-app.module';

async function bootstrap() {
  const app = await NestFactory.create(LikesAppModule);
  await app.listen(process.env.port ?? 3004);
}
bootstrap();
