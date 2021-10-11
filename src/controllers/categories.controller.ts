import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `product ${productId} and ${categoryId}`;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Category created',
      payload,
    };
  }
}
