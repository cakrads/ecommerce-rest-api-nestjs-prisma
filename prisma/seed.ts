import { products } from './initial-data';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // prisma.product.upsert({
  //   where: { id: 1 },
  //   create: data,
  // });

  await prisma.$transaction(
    products.map((product) => {
      return prisma.product.upsert({
        where: { slug: product.slug },
        update: {},
        create: {
          title: product.title,
          subtitle: product.subtitle,
          slug: product.slug,
          context: product.context,
          description: product.description,
          image: product.image,
          price: {
            create: [
              {
                currency: product.price[0].currency,
                currentPrice: product.price[0].currentPrice,
                fullPrice: product.price[0].fullPrice,
                discount: product.price[0].discount,
              },
            ],
          },
          brands: {
            connectOrCreate: {
              create: {
                title: product.brand.title,
                slug: product.brand.slug,
                image: product.brand.image,
                description: product.brand.description,
              },
              where: {
                slug: product.brand.slug,
              },
            },
          },
          categories: {
            connectOrCreate: {
              create: {
                title: product.category.title,
                slug: product.category.slug,
                description: product.category.description,
              },
              where: {
                slug: product.category.slug,
              },
            },
          },
          // categoryId: product.categoryId,
          // brandId: product.brandId,
          source: product.source,
          published: product.published,
        },
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
