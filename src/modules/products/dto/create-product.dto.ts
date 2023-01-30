import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle?: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  context: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  image?: string[];

  // @ApiProperty()
  // price?: Price;

  // @ApiProperty()
  // categories?: Category;

  // @ApiProperty()
  // brands?: Brand

  @ApiProperty({ required: false, default: '' })
  source?: string = '';

  @ApiProperty({ required: false, default: true })
  published?: boolean = true;
}
