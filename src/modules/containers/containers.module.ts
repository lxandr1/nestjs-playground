import { Module } from '@nestjs/common';
import { ContainersService } from './containers.service';
import { ContainersController } from './containers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainerEntity } from './entities/container.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContainerEntity])],
  controllers: [ContainersController],
  providers: [ContainersService],
})
export class ShippingsModule {}
