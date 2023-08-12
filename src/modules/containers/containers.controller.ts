import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ContainersService } from './containers.service';
import { CreateContainerDto } from './dto/create-container.dto';

@Controller('containers')
export class ContainersController {
  constructor(private readonly containersController: ContainersService) {}

  @Get()
  async getAll() {
    try {
      const result = await this.containersController.getAll();

      return {
        message: 'Success to get containers',
        result,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  create(@Body() createContainerDto: CreateContainerDto) {
    try {
      const result = this.containersController.create(createContainerDto);
      if (!result) {
        throw new HttpException(
          'Failed to create container',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: 'Create container success',
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
