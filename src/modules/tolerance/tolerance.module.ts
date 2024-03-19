import { Module } from '@nestjs/common';

import { ToleranceController } from '../../controllers/tolerance/tolerance.controller';
import { ToleranceService } from '../../services/tolerance/tolerance.service';
import { Tolerance } from '../../entities/tolerance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tolerance])],
  controllers: [ToleranceController],
  providers: [ToleranceService],
})
export class ToleranceModule {}
