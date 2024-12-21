import { Injectable, Logger } from '@nestjs/common';
import { CreateAdotanteDto } from './dto/create-adotante.dto';
import { UpdateAdotanteDto } from './dto/update-adotante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Adotante } from './entities/adotante.entity';
import { Repository } from 'typeorm';
import { Endereco } from 'enderecos/entities/endereco.entity';

@Injectable()
export class AdotantesService {
  constructor(
    @InjectRepository(Adotante)
    private readonly adotanteRepository: Repository<Adotante>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}
  async create(createAdotanteDto: CreateAdotanteDto) {
    try {
      const response = await this.adotanteRepository.save(createAdotanteDto);
      if (response) {
        return {
          sucess: true,
          message: 'Adotante cadastrado com sucesso',
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async findAll() {
    try {
      const response = await this.adotanteRepository.find({
        relations: {
          endereco: true,
        },
      });
      if (response) {
        return {
          sucess: true,
          message: 'Adotantes encontrados com sucesso',
          data: response,
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.adotanteRepository.findOne({
        where: { id },
        relations: {
          endereco: true,
        },
      });
      if (response) {
        return {
          sucess: true,
          message: 'Adotante encontrado com sucesso',
          data: response,
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async update(id: number, updateAdotanteDto: UpdateAdotanteDto) {
    try {
      const response = await this.adotanteRepository.update(
        id,
        updateAdotanteDto,
      );
      if (response) {
        return {
          sucess: true,
          message: 'Adotante atualizado com sucesso',
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async remove(id: number) {
    try {
      const response = await this.adotanteRepository.softDelete(id);
      if (response) {
        return {
          sucess: true,
          message: 'Adotante removido com sucesso',
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }
}
