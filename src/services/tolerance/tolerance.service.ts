import { Injectable } from '@nestjs/common';
import { Tolerance } from '../../entities/tolerance.entity';

const TOLERANCE_MOCK_DATA = [
  { color: 'brown', tolerance: '+1%' },
  { color: 'red', tolerance: '+2%' },
  { color: 'green', tolerance: '+0.5%' },
  { color: 'blue', tolerance: '+0.25%' },
  { color: 'violet', tolerance: '+0.1%' },
  { color: 'grey', tolerance: '+0.05%' },
  { color: 'gold', tolerance: '+5%' },
  { color: 'silver', tolerance: '+10%' },
];

@Injectable()
export class ToleranceService {
  private tolerances: Tolerance[] = [...TOLERANCE_MOCK_DATA];

  findAll() {
    return this.tolerances;
  }
}
