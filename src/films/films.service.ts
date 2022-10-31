import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmsService {

  constructor(
    @InjectRepository(Film)
    private repository: Repository<Film>
  ) {}

  findAll() {
    return this.repository.find();
  }

  async getPopular() {
    const res = await this.repository.find();

    return res.sort((a, b) => +b.rating - +a.rating)
  }

  findOne(id: number) {
    return this.repository.findOneBy({id});
  }
}
