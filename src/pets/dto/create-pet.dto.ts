import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreatePetDto {
  @ApiProperty({
    example: 'Bolt',
    type: 'string',
  })
  @IsString()
  nome: string;
  @ApiProperty({
    example: 'Cachorro',
    type: 'string',
  })
  @IsString()
  tipo: string;

  @ApiProperty({
    example: '4',
    type: 'number',
  })
  @IsInt()
  idade: number;

  @ApiProperty({
    example: 'Macho',
    type: 'string',
  })
  @IsString()
  sexo: string;
}
