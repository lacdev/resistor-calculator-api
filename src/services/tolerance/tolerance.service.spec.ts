import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ToleranceService } from './tolerance.service';
import { Tolerance } from '../../entities/tolerance.entity';

describe('ToleranceService', () => {
  let service: ToleranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ToleranceService,
        { provide: getRepositoryToken(Tolerance), useValue: {} },
      ],
    }).compile();

    service = module.get<ToleranceService>(ToleranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
