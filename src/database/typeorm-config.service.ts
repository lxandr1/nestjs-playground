import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { AllConfigType, DatabaseConfig } from '../config/config.type';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService<AllConfigType>) {
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const config = this.configService.get<DatabaseConfig>('database');
    return {
      type: config.type,
      host: config.host,
      port: +config.port,
      database: config.database,
      username: config.username,
      password: config.password,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: config.synchronize,
      logging: config.logging,
      keepConnectionAlive: true,
    } as TypeOrmModuleOptions;
  }
}
