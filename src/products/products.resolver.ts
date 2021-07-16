import { Args, Query, Resolver, Mutation, Int } from '@nestjs/graphql';
import { CreateProductInput } from 'src/dto/create-product.input';
import { UpdateProductInput } from 'src/dto/update-product.input';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query((returns) => [Product])
  products(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Query((returns) => Product)
  productById(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.findById(id);
  }

  @Mutation((returns) => Product)
  newProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.newProduct(createProductInput);
  }

  @Mutation((returns) => Product)
  updateProduct(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductInput);
  }
}
