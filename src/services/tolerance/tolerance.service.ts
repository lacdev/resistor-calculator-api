import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tolerance } from '../../entities/tolerance.entity';

@Injectable()
export class ToleranceService {
  constructor(
    @InjectRepository(Tolerance)
    private readonly toleranceRepository: Repository<Tolerance>,
  ) {}

  async findAll() {
    return await this.toleranceRepository.find();
  }
}
