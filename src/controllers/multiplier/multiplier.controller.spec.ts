import { MultiplierController } from './multiplier.controller';
import { MultiplierService } from '../../services/multiplier/multiplier.service';
import { MULTIPLIER_MOCK_DATA } from '../../mocks/multiplier';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Multiplier } from '../../entities/multiplier.entity';

const mockMultiplierRepository = {
  find: jest.fn().mockResolvedValue(MULTIPLIER_MOCK_DATA),
};

describe('MultiplierController', () => {
  let multiplierController: MultiplierController;
  let multiplierService: MultiplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        MultiplierService,
        {
          provide: getRepositoryToken(Multiplier),
          useValue: mockMultiplierRepository,
        },
        MultiplierController,
      ],
    }).compile();

    multiplierService = module.get<MultiplierService>(MultiplierService);
    multiplierController =
      module.get<MultiplierController>(MultiplierController);
  });

  describe('findAll', () => {
    it('should return an array of multiplier values correctly', async () => {
      const result = Promise.resolve(MULTIPLIER_MOCK_DATA);

      jest.spyOn(multiplierService, 'findAll').mockImplementation(() => result);

      expect(multiplierController.findAll()).toBe(result);
    });
  });
});
