import { ApiProperty } from '@nestjs/swagger';

class ProductDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  prize: number;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  tags?: [string];
}

export { ProductDTO };
