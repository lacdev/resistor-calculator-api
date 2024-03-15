import { Controller, Get } from '@nestjs/common';
import { MultiplierService } from '../../services/multiplier/multiplier.service';

@Controller('resistor-values')
export class MultiplierController {
  constructor(private readonly multiplierService: MultiplierService) {}

  @Get('multipliers')
  findAll() {
    return this.multiplierService.findAll();
  }
}
