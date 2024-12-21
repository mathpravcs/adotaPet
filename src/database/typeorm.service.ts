import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.config.get<string>('database.host'),
      port: this.config.get<number>('database.port'),
      database: this.config.get<string>('database.name'),
      username: this.config.get<string>('database.username'),
      password: this.config.get<string>('database.password'),
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      autoLoadEntities: true,
      logger: 'file',
      ssl: false,
      synchronize: true, // never use TRUE in production!
    };
  }
}
