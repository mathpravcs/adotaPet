import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateEnderecoDto } from 'enderecos/dto/create-endereco.dto';

export class CreateAdotanteDto {
  @ApiProperty({
    example: 'João',
    type: 'string',
  })
  @IsString({ message: 'nome deve ser uma string' })
  @IsNotEmpty({ message: 'nome deve ser preenchido' })
  nome: string;

  @ApiProperty({
    example: '(11)123456789',
    type: 'string',
  })
  @IsString({ message: 'telefone deve ser uma string' })
  @IsNotEmpty({ message: 'telefone deve ser preenchido' })
  telefone: string;

  @ApiProperty({
    example: 'dX4ZG@example.com',
    type: 'string',
  })
  @IsEmail()
  @IsNotEmpty({ message: 'email deve ser preenchido' })
  email: string;

  @ApiProperty({
    type: CreateEnderecoDto,
  })
  @Allow({
    message: 'endereco deve ser preenchido',
  })
  endereco: CreateEnderecoDto;
}
