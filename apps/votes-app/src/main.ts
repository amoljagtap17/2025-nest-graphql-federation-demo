import { NestFactory } from '@nestjs/core';
import { VotesAppModule } from './votes-app.module';

async function bootstrap() {
  const app = await NestFactory.create(VotesAppModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
