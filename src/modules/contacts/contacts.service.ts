/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, Request } from '@nestjs/common';
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

  async findAll(userId: string, @Request() req) {
    return await this.prisma.contact.findMany({
      where: { userId: req.user.id },
    });
  }

  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({ where: { id } });
    if (!contact) {
      throw new NotFoundException('Contact not found.');
    }
    return contact;
  }

  async update(
    id: string,
    updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact) {
      throw new NotFoundException('Contact not found.');
    }
    const updatedContact = await this.prisma.contact.update({
      where: { id },
      data: { ...updateContactDto },
    });

    return updatedContact;
  }

  async remove(id: string) {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact) {
      throw new NotFoundException('Contact not found.');
    }
    await this.prisma.contact.delete({ where: { id } });
  }
}
