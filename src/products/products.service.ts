import { Injectable } from '@nestjs/common';
import { Product } from './schemas/products.schema';
import { ProductsRepository } from './products.repository';
import { ProductDTO } from './dto/product';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async getProductById(id: string): Promise<Product> {
    return this.productsRepository.findOne({ id });
  }

  async getProducts(): Promise<Product[]> {
    return this.productsRepository.find({});
  }

  async createProduct(product: ProductDTO): Promise<Product> {
    return this.productsRepository.create(product);
  }
}
