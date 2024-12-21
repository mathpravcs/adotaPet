import { Injectable, Logger } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}
  async create(createPetDto: CreatePetDto) {
    try {
      const pet = await this.petRepository.save(createPetDto);

      if (!pet) {
        return {
          sucess: false,
          message: 'Pet não cadastrado',
        };
      }

      return {
        sucess: true,
        message: 'Pet cadastrado com sucesso',
      };
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  async findAll() {
    try {
      const pets = await this.petRepository.find();
      if (!pets) {
        return {
          sucess: false,
          message: 'Nenhum pet cadastrado',
          data: [],
        };
      }
      return pets;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const pet = await this.petRepository.findOne({ where: { id } });
      if (!pet) {
        return {
          sucess: false,
          message: 'Nenhum pet encontrado',
          data: [],
        };
      }
      return pet;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    try {
      const pet = await this.petRepository.update(id, updatePetDto);

      if (!pet) {
        return {
          sucess: false,
          message: 'Nenhum pet encontrado',
          data: [],
        };
      }
      return {
        sucess: true,
        message: 'Pet atualizado com sucesso',
      };
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const pet = await this.petRepository.softDelete(id);

      if (!pet) {
        return {
          sucess: false,
          message: 'Nenhum pet encontrado',
          data: [],
        };
      }

      return {
        sucess: true,
        message: 'Pet removido com sucesso',
      };
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}
