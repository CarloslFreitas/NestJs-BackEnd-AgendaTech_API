/* eslint-disable prettier/prettier */
import { IsString, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  fullname: string;

  @IsString()
  email: string;

  @IsString()
  @MinLength(8)
  phone: string;
}
