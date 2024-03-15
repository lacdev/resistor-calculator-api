import { Module } from '@nestjs/common';

import { MultipliersModule } from '../multipliers/multipliers.module';
import { TolerancesModule } from '../tolerances/tolerances.module';

@Module({
  imports: [MultipliersModule, TolerancesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
