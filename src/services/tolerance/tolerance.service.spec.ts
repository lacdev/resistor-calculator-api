import { Test, TestingModule } from '@nestjs/testing';
import { ToleranceService } from './tolerance.service';

describe('ToleranceService', () => {
  let service: ToleranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToleranceService],
    }).compile();

    service = module.get<ToleranceService>(ToleranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
