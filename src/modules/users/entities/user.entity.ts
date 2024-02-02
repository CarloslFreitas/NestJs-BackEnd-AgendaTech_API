/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  fullname: string;
  email: string;
  phone: string;
  registeredAt: Date = new Date();

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
