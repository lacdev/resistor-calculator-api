import { MultiplierController } from './multiplier.controller';
import { MultiplierService } from '../../services/multiplier/multiplier.service';
import { MULTIPLIER_MOCK_DATA } from '../../mocks/multiplier';

describe('MultiplierController', () => {
  let multiplierController: MultiplierController;
  let multiplierService: MultiplierService;

  beforeEach(() => {
    multiplierService = new MultiplierService();
    multiplierController = new MultiplierController(multiplierService);
  });

  describe('findAll', () => {
    it('should return an array of multiplier values correctly', async () => {
      const result = MULTIPLIER_MOCK_DATA;

      jest.spyOn(multiplierService, 'findAll').mockImplementation(() => result);

      expect(multiplierController.findAll()).toBe(result);
    });
  });
});
