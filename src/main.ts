import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from './config/config.type';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<AllConfigType>);
  const port = configService.getOrThrow('app.port', { infer: true });

  // Use Interceptors
  app.useGlobalInterceptors(new TransformInterceptor());

  // Use Exceptions
  app.useGlobalFilters(new HttpExceptionFilter());

  // Use Pipe
  app.useGlobalPipes(new ValidationPipe());

  // Set Prefix API
  app.setGlobalPrefix('api/v1');

  console.log('=================================================');
  console.info(`Application running on port ${port}`);
  console.log('=================================================');
  await app.listen(3000);
}
bootstrap();
