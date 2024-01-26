import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { INestApplication } from '@nestjs/common';
export const initSwagger = (app: INestApplication, API_PREFIX: string) => {
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Your API Title')
    .setDescription('Your API description')
    .setVersion('1.0')
    // .addServer('http://localhost:3000/api/v1/', 'Local environment')
    // .addServer('http://localhost:3000/api/v2/', 'Local environment')
    // .addServer('http://localhost:3000/', 'Local environment')
    // .addServer('https://staging.yourapi.com/', 'Staging')
    // .addServer('https://production.yourapi.com/', 'Production')
    // .addTag('Your API Tag')
    // .addGlobalParameters({
    //   name: 'country',
    //   in: 'query',
    // })
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    // include: [`${API_PREFIX}/:version/docs`],
    deepScanRoutes: false,
  });

  SwaggerModule.setup(`${API_PREFIX}`, app, document);
  // UPDATING SWAGGER TO USER PREFIX
  // SwaggerModule.setup(`${API_PREFIX}/:version/docs`, app, document);
};
