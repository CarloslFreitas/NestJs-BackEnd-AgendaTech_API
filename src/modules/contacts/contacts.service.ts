/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}
  async create(createContactDto: CreateContactDto, userId: string) {
    const contact = Object.assign(new Contact(), createContactDto);
    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        fullname: contact.fullname,
        email: contact.email,
        phone: contact.phone,
        registeredAt: contact.registeredAt,
        userId,
      },
    });
    return newContact;
  }

  async findAll() {
    return await this.prisma.contact.findMany();
  }

  async findOne(id: string) {
    const contact = await this.prisma.contact.findFirst({ where: { id } });
    if (!contact) {
      throw new NotFoundException('Contact not found.');
    }
    return contact;
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: string) {
    return `This action removes a #${id} contact`;
  }
}
