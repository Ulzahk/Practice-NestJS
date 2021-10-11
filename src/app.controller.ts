import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Good day';
  }
  @Get('new')
  newEndpoing() {
    return "I'm new";
  }
  @Get('/route/')
  hello() {
    return 'with NestJS';
  }
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit=> ${limit} offset=> ${offset} brand=>${brand}`;
  }
  @Get('products/filter')
  getProductFilter() {
    return `I\'m a filter`;
  }
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `product ${productId} and ${categoryId}`;
  }
}
