import { Adocoe } from 'adocoes/entities/adocoe.entity';
import { Endereco } from 'enderecos/entities/endereco.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('adotantes')
export class Adotante {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column({ unique: true })
  email: string;

  @OneToOne(() => Endereco, (endereco) => endereco.adotante, {
    cascade: true,
    eager: true,
  })
  endereco: Endereco;

  @ManyToOne(() => Adocoe, (adocoe) => adocoe.adotante)
  adocoes: Adocoe[];
}
