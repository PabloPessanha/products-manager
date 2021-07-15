import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  manufacturer: string;

  @Field((type) => Int)
  stock: number;

  @Field((type) => Float)
  price: number;
}
