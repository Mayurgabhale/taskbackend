import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS before starting the server
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true, // Include cookies or authorization headers in requests
  });

  // Start the server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
