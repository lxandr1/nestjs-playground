import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { Status } from '../entities/container.entity';

export class CreateContainerDto {
  @IsString()
  @IsNotEmpty()
  containerName: string;

  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;
}
