import { PartialType } from '@nestjs/swagger';
import { CreateAdocoeDto } from './create-adocoe.dto';

export class UpdateAdocoeDto extends PartialType(CreateAdocoeDto) {}
