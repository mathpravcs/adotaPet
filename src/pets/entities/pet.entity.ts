import { Adocoe } from 'adocoes/entities/adocoe.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;

  @Column()
  idade: number;

  @Column()
  sexo: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => Adocoe, (adocoe) => adocoe.pet)
  adocoes: Adocoe[];
}
