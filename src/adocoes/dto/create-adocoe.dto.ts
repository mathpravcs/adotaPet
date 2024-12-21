import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsDate, IsInt } from 'class-validator';

export class CreateAdocoeDto {
  @ApiProperty({
    example: '1',
    type: 'number',
  })
  @IsInt({ message: 'petId deve ser um number' })
  petId: number;

  @ApiProperty({
    example: '1',
    type: 'number',
  })
  @IsInt({ message: 'adotanteId deve ser um number' })
  adotanteId: number;

  @ApiProperty({
    example: 'true',
    type: 'boolean',
  })
  @IsBoolean({ message: 'adotado deve ser um booleano' })
  adotado: boolean;

  @ApiProperty({
    example: '2022-01-01',
    type: 'date',
  })
  @Transform(({ value }) => (value ? new Date(value) : value)) // Transforma a string em Date
  @IsDate({ message: 'data deve ser uma instância de Date' })
  data: Date;
}
