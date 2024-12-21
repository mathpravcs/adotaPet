import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Adotante } from 'adotantes/entities/adotante.entity';

@Entity('enderecos')
export class Endereco {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @OneToOne(() => Adotante, (adotante) => adotante.endereco)
  @JoinColumn({ name: 'adotanteId' })
  adotante: Adotante;
}
