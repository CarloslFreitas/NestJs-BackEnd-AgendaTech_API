/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;

  fullname: string;
  email: string;
  phone: string;
  registeredAt: string = new Date().toISOString();

  constructor() {
    this.id = randomUUID();
  }
}
