import { Module } from '@nestjs/common';

import { MultiplierModule } from '../multiplier/multiplier.module';
import { ToleranceModule } from '../tolerance/tolerance.module';

@Module({
  imports: [MultiplierModule, ToleranceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
