import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, now } from 'mongoose';
import { ProductDTO } from './dto/product';
import { Product, ProductDocument } from './schemas/products.schema';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findOne(productFilterQuery: FilterQuery<Product>): Promise<Product> {
    return this.productModel.findOne(productFilterQuery);
  }

  async find(productFilterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productFilterQuery);
  }

  async create(product: ProductDTO): Promise<Product> {
    product['created_at'] = now();
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async findOneAndUpdate(
    productFilterQuery: FilterQuery<Product>,
    product: Partial<Product>,
  ): Promise<Product> {
    return this.productModel.findOneAndUpdate(productFilterQuery, product);
  }
}
