import { Adotante } from 'adotantes/entities/adotante.entity';
import { Pet } from 'pets/entities/pet.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('adocoes')
export class Adocoe {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  adotado: boolean;

  @Column()
  data: Date;

  @Column()
  petId: number;

  @Column()
  adotanteId: number;

  @OneToMany(() => Adotante, (adotante) => adotante.adocoes)
  @JoinColumn({ name: 'adotanteId' })
  adotante: Adotante;

  @ManyToMany(() => Pet, (pet) => pet.adocoes)
  @JoinColumn({ name: 'petId' })
  pet: Pet;
}
