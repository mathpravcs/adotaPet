import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    snapshot: true,
    cors: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Automatically transform payloads to DTO instances
      forbidNonWhitelisted: true,
      whitelist: true, // Automatically remove non-decorated properties
    }),
  );
  const docConfig = new DocumentBuilder()
    .setTitle('Adota Pet')
    .setDescription('Sistema de adoção de pets')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('api', app, document);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('APP_PORT');
  await app.listen(port, '0.0.0.0');
}
bootstrap();
