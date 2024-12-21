import { Module } from '@nestjs/common';
import { AdotantesService } from './adotantes.service';
import { AdotantesController } from './adotantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adotante } from './entities/adotante.entity';
import { Endereco } from 'enderecos/entities/endereco.entity';

@Module({
  controllers: [AdotantesController],
  providers: [AdotantesService],
  imports: [TypeOrmModule.forFeature([Adotante, Endereco])],
})
export class AdotantesModule {}
