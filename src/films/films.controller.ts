import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get('/popular')
  getPopular() {
    return this.filmsService.getPopular()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }
}
