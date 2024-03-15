import { Module } from '@nestjs/common';

import { MultiplierController } from 'src/controllers/multiplier/multiplier.controller';
import { MultiplierService } from 'src/services/multiplier/multiplier.service';

@Module({ controllers: [MultiplierController], providers: [MultiplierService] })
export class MultipliersModule {}
