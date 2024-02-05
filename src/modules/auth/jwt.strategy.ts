/* eslint-disable prettier/prettier */
import { CanActivate, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }
  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}

export class AuthGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  canActivate(context) {
    const user = context.user;
    const id = context.params['id'];

    if (!user) {
      throw new UnauthorizedException('User not logged in.');
    }

    if (user.id !== id) {
      throw new UnauthorizedException(
        'User does not have permission to access this route.',
      );
    }

    return true;
  }
}
