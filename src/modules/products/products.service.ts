import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update-product.dto';

import type { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product. ${JSON.stringify(
      updateProductDto,
    )}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
