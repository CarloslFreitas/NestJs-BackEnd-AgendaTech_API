/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;

  fullname: string;
  email: string;
  phone: string;
  registeredAt: Date = new Date();

  constructor() {
    this.id = randomUUID();
  }
}
