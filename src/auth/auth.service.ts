import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthEntity } from './entities/auth.entity';
import {JwtService} from '@nestjs/jwt'
import {compare, genSalt, hash} from 'bcryptjs'
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
    ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const {password, ...userData} = user
    const payload = { email: user.email, sub: user.id };
    
    return {
      ...userData,
      access_token: this.jwtService.sign(payload),
    };
  }
 
}
