import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>
  ) {}

  async foundPost(id: number, dto = null, method: string) {
    const foundPost = await this.repository.findOneBy({id});

    if(!foundPost) throw new NotFoundException('Пост не найден')

    switch(method) {
      case 'update': 
        return this.repository.update(id, dto)
      case 'remove':
        return this.repository.delete(id)
      default: 
        break
    }
    return foundPost
  }

  async create(dto: CreatePostDto) {
    return this.repository.save(dto)    
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.foundPost(id, null, '')
  }

  update(id: number, dto: UpdatePostDto) {
    return this.foundPost(id, dto, 'update')
  }

  remove(id: number) {
    return this.foundPost(id, null, 'remove')
  }
}
