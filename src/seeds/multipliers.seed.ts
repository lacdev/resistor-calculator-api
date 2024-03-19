import { DataSource } from 'typeorm';
import { Multiplier } from '../entities/multiplier.entity';

import { MULTIPLIER_MOCK_DATA } from '../mocks/multiplier';

export const seedMultipliers = async (
  dataSource: DataSource,
): Promise<void> => {
  const multiplierRepository = dataSource.getRepository(Multiplier);

  await multiplierRepository.save(MULTIPLIER_MOCK_DATA);
};
