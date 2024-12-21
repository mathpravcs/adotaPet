import { Module } from '@nestjs/common';
import { AdocoesService } from './adocoes.service';
import { AdocoesController } from './adocoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adocoe } from './entities/adocoe.entity';
import { Adotante } from 'adotantes/entities/adotante.entity';
import { Pet } from 'pets/entities/pet.entity';

@Module({
  controllers: [AdocoesController],
  providers: [AdocoesService],
  imports: [TypeOrmModule.forFeature([Adocoe, Adotante, Pet])],
})
export class AdocoesModule {}
