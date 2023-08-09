import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from './config.type';

export default registerAs<DatabaseConfig>('database', () => {
  return {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
      ? parseInt(process.env.DATABASE_PORT, 10)
      : 3306,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD || 'secret',
    username: process.env.DATABASE_USERNAME,
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    logging: process.env.DATABASE_LOGGING === 'true',
  };
});
