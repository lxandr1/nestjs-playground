import { DatabaseType } from "typeorm";

export type AppConfig = {
  nodeEnv: string;
  name: string;
  workingDirectory: string;
  frontendDomain?: string;
  backendDomain: string;
  port: number;
  apiPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
};

export type DatabaseConfig = {
  type?: string;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  database?: string;
  synchronize?: boolean;
  logging?: boolean;
};

export type AllConfigType = {
  app: AppConfig;
  database: DatabaseConfig;
};
