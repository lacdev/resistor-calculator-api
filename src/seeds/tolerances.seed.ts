import { DataSource } from 'typeorm';

import { Tolerance } from '../entities/tolerance.entity';
import { TOLERANCE_MOCK_DATA } from '../mocks/tolerance';

export const seedTolerances = async (dataSource: DataSource): Promise<void> => {
  const toleranceRepository = dataSource.getRepository(Tolerance);

  await toleranceRepository.save(TOLERANCE_MOCK_DATA);
};
