import { Injectable } from '@nestjs/common';

import { Multiplier } from '../../entities/multiplier.entity';

import { MULTIPLIER_MOCK_DATA } from '../../mocks/multiplier';

@Injectable()
export class MultiplierService {
  private multipliers: Multiplier[] = [...MULTIPLIER_MOCK_DATA];

  findAll() {
    return this.multipliers;
  }
}
