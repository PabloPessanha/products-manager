import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/database/products.sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/database/schema.gql'),
    }),
    ProductsModule,
  ],
})
export class AppModule {}
