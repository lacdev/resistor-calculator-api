import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MultiplierService } from '../../services/multiplier/multiplier.service';

@ApiTags('Multipliers')
@Controller('resistor-values')
export class MultiplierController {
  constructor(private readonly multiplierService: MultiplierService) {}

  @Get('multipliers')
  findAll() {
    return this.multiplierService.findAll();
  }
}
