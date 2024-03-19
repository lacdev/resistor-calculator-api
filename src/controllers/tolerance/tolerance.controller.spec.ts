import { ToleranceController } from './tolerance.controller';
import { ToleranceService } from '../../services/tolerance/tolerance.service';
import { TOLERANCE_MOCK_DATA } from '../../mocks/tolerance';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Tolerance } from '../../entities/tolerance.entity';

const mockToleranceRepository = {
  find: jest.fn().mockResolvedValue(TOLERANCE_MOCK_DATA),
};

describe('ToleranceController', () => {
  let toleranceController: ToleranceController;
  let toleranceService: ToleranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        ToleranceService,
        {
          provide: getRepositoryToken(Tolerance),
          useValue: mockToleranceRepository,
        },
        ToleranceController,
      ],
    }).compile();

    toleranceService = module.get<ToleranceService>(ToleranceService);
    toleranceController = module.get<ToleranceController>(ToleranceController);
  });

  describe('findAll', () => {
    it('should return an array of multiplier values correctly', async () => {
      const result = Promise.resolve(TOLERANCE_MOCK_DATA);

      jest.spyOn(toleranceService, 'findAll').mockImplementation(() => result);

      expect(toleranceController.findAll()).toBe(result);
    });
  });
});
