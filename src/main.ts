import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataSource } from 'typeorm';

import { seedMultipliers } from './seeds/multipliers.seed';
import { seedTolerances } from './seeds/tolerances.seed';

import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const dataSource = app.get(DataSource);

  if (process.env.NODE_ENV === 'development') {
    // Add seed Data for local development and tests
    await seedMultipliers(dataSource);
    await seedTolerances(dataSource);
  }

  // Create API Endpoints Documentations
  const options = new DocumentBuilder()
    .setTitle('Enroute Resistor Calculator')
    .setDescription('Enroute Challenge March 2024 Resistor Calculator')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
}
bootstrap();
