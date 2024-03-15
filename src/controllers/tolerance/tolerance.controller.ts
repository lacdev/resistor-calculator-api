import { Controller, Get } from '@nestjs/common';
import { ToleranceService } from '../../services/tolerance/tolerance.service';

@Controller('resistor-values')
export class ToleranceController {
  constructor(private readonly toleranceService: ToleranceService) {}

  @Get('tolerances')
  findAll() {
    return this.toleranceService.findAll();
  }
}
