import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ShippingsService } from './shippings.service';

@Controller('shippings')
export class ShippingsController {
  constructor(private readonly shippingsService: ShippingsService) {}

  @Get()
  getAll() {
    if (true) {
      // Test Exception
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return {
      message: 'Hehehe',
      result: {
        container_name: 'lxandr1',
        status: 'ON_PROGRESS',
      },
    };
  }
}
