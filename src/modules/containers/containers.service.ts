import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContainerEntity } from './entities/container.entity';
import { Repository } from 'typeorm';
import { CreateContainerDto } from './dto/create-container.dto';

@Injectable()
export class ContainersService {
  constructor(
    @InjectRepository(ContainerEntity)
    private containerRepository: Repository<ContainerEntity>,
  ) {}

  async getAll() {
    return await this.containerRepository.find({
      select: { id: true, containerName: true, status: true },
    });
  }

  create(createContainerDto: CreateContainerDto): Promise<ContainerEntity> {
    return this.containerRepository.save(
      this.containerRepository.create(createContainerDto),
    );
  }
}
