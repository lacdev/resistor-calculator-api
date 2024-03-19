import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';

import { MultiplierModule } from '../../src/modules/multiplier/multiplier.module';
import { MULTIPLIER_MOCK_DATA } from '../../src/mocks/multiplier';

describe('[Feature] Multiplier - /multipliers', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MultiplierModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'pass123',
          database: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('Get Multipliers [GET /]', async () => {
    const response = await request(app.getHttpServer())
      .get('/resistor-values/multipliers')
      .expect(200);

    return expect(response.body).toEqual(MULTIPLIER_MOCK_DATA);
  });

  afterAll(async () => {
    await app.close();
  });
});
