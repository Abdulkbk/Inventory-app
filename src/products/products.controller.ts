import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductDTO } from './dto/product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProducts() {
    return this.productsService.getProducts();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getProductById(id: string) {
    return this.productsService.getProductById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addProduct(@Body() product: ProductDTO) {
    return this.productsService.createProduct(product);
  }
}
