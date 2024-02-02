/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class UsersService {
  private database: User[] = [];
  create(createUserDto: CreateUserDto) {
    const newUser = Object.assign(new User(), createUserDto);
    this.database.push(newUser);
    return instanceToPlain(newUser);
    // return 'This action adds a new user';
  }

  findAll() {
    return this.database;
    // return `This action returns all users`;
  }

  findOne(id: string): User {
    return this.database.find((user) => user.id == id);
    // return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const userIndex = this.database.findIndex((user) => user.id == id);
    this.database[userIndex] = {
      ...this.database[userIndex],
      ...updateUserDto,
    };
    return this.database[userIndex];
    // return `This action updates a #${id} user`;
  }

  remove(id: string) {
    const userIndex = this.database.findIndex((user) => user.id == id);
    this.database.splice(userIndex, 1);
    // return `This action removes a #${id} user`;
  }
}
