import { Injectable } from '@nestjs/common';
import { Multiplier } from '../../entities/multiplier.entity';

const MULTIPLIER_MOCK_DATA = [
  { color: 'black', multiplier: 1 },
  { color: 'brown', multiplier: 10 },
  { color: 'red', multiplier: 100 },
  { color: 'orange', multiplier: 1000 },
  { color: 'yellow', multiplier: 10000 },
  { color: 'green', multiplier: 100000 },
  { color: 'blue', multiplier: 1000000 },
  { color: 'violet', multiplier: 10000000 },
  { color: 'gold', multiplier: 0.1 },
  { color: 'silver', multiplier: 0.01 },
];

@Injectable()
export class MultiplierService {
  private multipliers: Multiplier[] = [...MULTIPLIER_MOCK_DATA];

  findAll() {
    return this.multipliers;
  }
}
