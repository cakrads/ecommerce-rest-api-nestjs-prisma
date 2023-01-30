import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import type { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ProductCreateInput): Promise<Product | null> {
    return this.prisma.product.create({
      data,
    });
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findOne(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  async update(
    id: number,
    data: Prisma.ProductUpdateInput,
  ): Promise<Product | null> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
