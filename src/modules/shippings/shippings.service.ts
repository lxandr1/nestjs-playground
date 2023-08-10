import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShippingEntity } from './entities/shipping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShippingsService {
  constructor(
    @InjectRepository(ShippingEntity)
    private shippingRepository: Repository<ShippingEntity>,
  ) {}

  async getAll() {
    await this.shippingRepository.find();
  }
}
