import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit=> ${limit} offset=> ${offset} brand=>${brand}`,
    };
  }
  @Get('filter')
  getProductFilter() {
    return {
      message: `I\'m a filter`,
    };
  }
  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Product created',
      payload,
    };
  }
  @Put(':productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    return {
      productId,
      payload,
    };
  }
  @Delete(':productId')
  delete(@Param('productId') productId: number) {
    return {
      message: `Product ${productId} deleted`,
    };
  }
}