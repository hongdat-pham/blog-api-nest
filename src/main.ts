// src/main.ts

import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ApiKeyGuard } from './guards/api-key.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const reflector = app.get(Reflector);

  app.useGlobalGuards(new ApiKeyGuard(reflector, configService));

  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );

  const port = configService.get<number>('PORT') ?? 3000;
  await app.listen(port);
  console.log(`🚀 App running on port ${port}`);
}
bootstrap();
