import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // você vai precisar acessar com frontend de outro processo em outra porta,
  // então, habilite o cors
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3333);
}
bootstrap();
