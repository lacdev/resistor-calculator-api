import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';

import { TOLERANCE_MOCK_DATA } from '../../src/mocks/tolerance';
import { ToleranceModule } from '../../src/modules/tolerance/tolerance.module';

describe('[Feature] Tolerance - /tolerances', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ToleranceModule,
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

  it('Get Tolerances [GET /]', async () => {
    const response = await request(app.getHttpServer())
      .get('/resistor-values/tolerances')
      .expect(200);

    return expect(response.body).toEqual(TOLERANCE_MOCK_DATA);
  });

  afterAll(async () => {
    await app.close();
  });
});
