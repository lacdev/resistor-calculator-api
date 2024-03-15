import { Injectable } from '@nestjs/common';

import { Tolerance } from '../../entities/tolerance.entity';

import { TOLERANCE_MOCK_DATA } from '../../mocks/tolerance';

@Injectable()
export class ToleranceService {
  private tolerances: Tolerance[] = [...TOLERANCE_MOCK_DATA];

  findAll() {
    return this.tolerances;
  }
}
