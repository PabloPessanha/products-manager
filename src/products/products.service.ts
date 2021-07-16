import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductInput } from 'src/dto/create-product.input';
import { UpdateProductInput } from 'src/dto/update-product.input';
import { DeleteResult, Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}
  async newProduct(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = this.productsRepository.create(createProductInput);

    return this.productsRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findById(id: number): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  async update(
    id: number,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    await this.productsRepository.findOneOrFail(id);
    return this.productsRepository.save({ id, ...updateProductInput });
  }

  async delete(id: number): Promise<Product> {
    const product = await this.productsRepository.findOneOrFail(id);
    await this.productsRepository.delete(id);
    return product;
  }
}
