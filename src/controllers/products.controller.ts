import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

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
  getProductFilter(@Res() response: Response) {
    return response.status(200).send({
      message: `I\'m a filter`,
    });
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    return {
      message: `Product ${productId}`,
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
