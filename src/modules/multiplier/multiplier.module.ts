import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MultiplierService } from '../../services/multiplier/multiplier.service';
import { Multiplier } from '../../entities/multiplier.entity';
import { MultiplierController } from '../../controllers/multiplier/multiplier.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Multiplier])],
  controllers: [MultiplierController],
  providers: [MultiplierService],
})
export class MultiplierModule {}
