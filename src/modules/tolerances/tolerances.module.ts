import { Module } from '@nestjs/common';

import { ToleranceController } from 'src/controllers/tolerance/tolerance.controller';
import { ToleranceService } from 'src/services/tolerance/tolerance.service';

@Module({ controllers: [ToleranceController], providers: [ToleranceService] })
export class TolerancesModule {}
