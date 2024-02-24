/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  userService: any;
  private _contact: any;
  public get contact(): any {
    return this._contact;
  }
  public set contact(value: any) {
    this._contact = value;
  }
  async onModuleInit() {
    await this.$connect();
  }
}
