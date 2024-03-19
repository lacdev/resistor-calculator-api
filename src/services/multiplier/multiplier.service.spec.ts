import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { MultiplierService } from './multiplier.service';
import { Multiplier } from '../../entities/multiplier.entity';

describe('MultiplierService', () => {
  let service: MultiplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MultiplierService,
        { provide: getRepositoryToken(Multiplier), useValue: {} },
      ],
    }).compile();

    service = module.get<MultiplierService>(MultiplierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
