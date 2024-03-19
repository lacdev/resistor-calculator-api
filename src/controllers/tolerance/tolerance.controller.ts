import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ToleranceService } from '../../services/tolerance/tolerance.service';

@ApiTags('Tolerances')
@Controller('resistor-values')
export class ToleranceController {
  constructor(private readonly toleranceService: ToleranceService) {}

  @Get('tolerances')
  findAll() {
    return this.toleranceService.findAll();
  }
}
