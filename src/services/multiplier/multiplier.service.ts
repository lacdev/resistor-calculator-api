import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Multiplier } from '../../entities/multiplier.entity';

@Injectable()
export class MultiplierService {
  constructor(
    @InjectRepository(Multiplier)
    private readonly multiplierRepository: Repository<Multiplier>,
  ) {}

  async findAll() {
    return await this.multiplierRepository.find();
  }
}
