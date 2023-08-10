import { IsString, IsEnum } from 'class-validator';
import { Status } from '../entities/shipping.entity';

export class CreateShippingDto {
  @IsString()
  containerName: string;

  @IsEnum(Status)
  status: Status;
}
