import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  async findAll(): Promise<Product[]> {
    const product = new Product();
    product.id = 1;
    product.name = 'Corretor';
    product.manufacturer = 'Bic';
    product.stock = 30;
    product.price = 1.99;

    return [product];
  }
}
