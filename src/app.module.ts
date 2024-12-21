import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { PetsModule } from './pets/pets.module';
import { AdotantesModule } from './adotantes/adotantes.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'database/typeorm.service';
import { AdocoesModule } from './adocoes/adocoes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${__dirname}\\config\\env\\${!process.env.NODE_ENV ? 'development.env' : process.env.NODE_ENV + '.env'}`,

      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    PetsModule,
    AdotantesModule,
    EnderecosModule,
    AdocoesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
