import { ToleranceController } from './tolerance.controller';
import { ToleranceService } from '../../services/tolerance/tolerance.service';
import { TOLERANCE_MOCK_DATA } from '../../mocks/tolerance';

describe('ToleranceController', () => {
  let toleranceController: ToleranceController;
  let toleranceService: ToleranceService;

  beforeEach(() => {
    toleranceService = new ToleranceService();
    toleranceController = new ToleranceController(toleranceService);
  });

  describe('findAll', () => {
    it('should return an array of multiplier values correctly', async () => {
      const result = TOLERANCE_MOCK_DATA;

      jest.spyOn(toleranceService, 'findAll').mockImplementation(() => result);

      expect(toleranceController.findAll()).toBe(result);
    });
  });
});
