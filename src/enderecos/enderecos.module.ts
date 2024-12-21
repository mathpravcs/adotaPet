import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';

@Module({
  controllers: [EnderecosController],
  providers: [EnderecosService],
})
export class EnderecosModule {}
