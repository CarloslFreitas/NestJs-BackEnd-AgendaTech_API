/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password.');
    }
    if (!(await compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Invalid email or password.');
    }
    return {
      token: this.jwtService.sign(
        { email: loginDto.email },
        { subject: user.id, secret: process.env.SECRET_KEY },
      ),
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        registeredAt: user.registeredAt,
      },
    };
  }
}
