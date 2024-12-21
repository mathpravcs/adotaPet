import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEnderecoDto {
  @ApiProperty({
    example: 'Rua 1',
    type: 'string',
  })
  @IsString({ message: 'rua deve ser uma string' })
  rua: string;

  @ApiProperty({
    example: '123',
    type: 'string',
  })
  @IsString({ message: 'numero deve ser uma string' })
  numero: string;

  @ApiProperty({
    example: 'Cidade 1',
    type: 'string',
  })
  @IsString({ message: 'cidade deve ser uma string' })
  cidade: string;

  @ApiProperty({
    example: 'SP',
    type: 'string',
  })
  @IsString({ message: 'estado deve ser uma string' })
  estado: string;

  @ApiProperty({
    example: 'CEP 1',
    type: 'string',
  })
  @IsString({ message: 'cep deve ser uma string' })
  cep: string;

  @ApiProperty({
    example: 'Complemento 1',
    type: 'string',
  })
  @IsString({ message: 'complemento deve ser uma string' })
  complemento: string;
}
