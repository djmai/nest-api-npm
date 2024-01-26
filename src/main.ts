// import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { initSwagger } from './config/swagger.config';
import { NestFactory } from '@nestjs/core';
import { API_PREFIX } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Multivesion
  app
    //   .enableVersioning({
    //     type: VersioningType.URI,
    //     defaultVersion: '1',
    //   })
    .setGlobalPrefix(API_PREFIX);

  // Inicializando Swagger
  initSwagger(app, API_PREFIX);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
