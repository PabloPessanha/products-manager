import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  manufacturer: string;

  @Field((type) => Int)
  stock: number;

  @Field((type) => Float)
  price: number;
}
