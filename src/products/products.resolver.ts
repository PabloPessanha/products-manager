import { Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query((returns) => [Product])
  products(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
