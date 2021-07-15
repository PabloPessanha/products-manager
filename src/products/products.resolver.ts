import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { CreateProductInput } from 'src/dto/create-product.input';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query((returns) => [Product])
  products(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Mutation((returns) => Product)
  newProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.newProduct(createProductInput);
  }
}
