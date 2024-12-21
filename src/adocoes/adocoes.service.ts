import { Injectable, Logger } from '@nestjs/common';
import { CreateAdocoeDto } from './dto/create-adocoe.dto';
import { UpdateAdocoeDto } from './dto/update-adocoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Adocoe } from './entities/adocoe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdocoesService {
  constructor(
    @InjectRepository(Adocoe) private adocoesRepository: Repository<Adocoe>,
  ) {}
  async create(createAdocoeDto: CreateAdocoeDto) {
    try {
      const response = await this.adocoesRepository.save(createAdocoeDto);
      if (response) {
        return {
          sucess: true,
          message: 'Adocoe cadastrado com sucesso',
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async findAll() {
    try {
      const response = await this.adocoesRepository.find();
      if (response) {
        return {
          sucess: true,
          message: 'Adocoes encontrados com sucesso',
          data: response,
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.adocoesRepository.findOne({
        where: { id: id },
        relations: {
          adotante: true,
          pet: true,
        },
      });
      if (response) {
        return {
          sucess: true,
          message: 'Adocoe encontrado com sucesso',
          data: response,
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async update(id: number, updateAdocoeDto: UpdateAdocoeDto) {
    try {
      const response = await this.adocoesRepository.update(id, updateAdocoeDto);
      if (response) {
        return {
          sucess: true,
          message: 'Adocoe atualizado com sucesso',
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async remove(id: number) {
    try {
      const response = await this.adocoesRepository.softDelete(id);
      if (response) {
        return {
          sucess: true,
          message: 'Adocoe removido com sucesso',
        };
      }
    } catch (error) {
      Logger.error(error);
    }
  }
}
