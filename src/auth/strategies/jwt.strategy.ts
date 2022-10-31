
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly UserService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: {sub: number, email: string}) {
    // const user = await this.UserService.findOne(payload.email)
    // if(!user) throw new UnauthorizedException('Нет доступа к этой странице')
    return console.log('user');
    
    // return { id: payload.sub, email: payload.email };
  }
}