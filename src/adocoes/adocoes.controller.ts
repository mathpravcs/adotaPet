import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdocoesService } from './adocoes.service';
import { CreateAdocoeDto } from './dto/create-adocoe.dto';
import { UpdateAdocoeDto } from './dto/update-adocoe.dto';

@Controller('adocoes')
export class AdocoesController {
  constructor(private readonly adocoesService: AdocoesService) {}

  @Post()
  create(@Body() createAdocoeDto: CreateAdocoeDto) {
    return this.adocoesService.create(createAdocoeDto);
  }

  @Get()
  findAll() {
    return this.adocoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adocoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdocoeDto: UpdateAdocoeDto) {
    return this.adocoesService.update(+id, updateAdocoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adocoesService.remove(+id);
  }
}
