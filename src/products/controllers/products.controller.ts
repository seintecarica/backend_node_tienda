import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe
} from '@nestjs/common';
import { Response } from 'express';
import { ParseIntPipe } from './../../common/parse-int/parse-int.pipe';
import { ProductsService } from '../../products/services/products.service';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //GET PARAMETROS QUERY
  @Get()
  getProducts(
    @Query('limit') limit: number = 100, //100 por defecto si no se envia nada
    @Query('offset') offset: number = 0, //0 por defecto si no se envia nada
    @Query('brand') brand: string,
  ) {
    /*return {
      message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`
    };*/
    return this.productsService.findAll();
  }

  //GET PARAMETROS QUERY
  // @Get('products')
  // getProducts(@Query() params: any){
  //   const { limit, offset } = params;
  //   return `products: limit=> ${limit} offset=> ${offset}`;
  // }

  @Get('filter')
  getProductFilter() {
    return { message: `Yo soy un filter` };
  }

  //------------------------------------

  //GET PASO DE PARAMETROS
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED) //Aquí se modificó el código de respuesta
  /*
  getProduct(@Param() params: any){
    return `product ${params.productId}`; */

  //getOne(@Res() response: Response, @Param('productId') productId: string) {
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body('') payload: CreateProductDto) {
    // return {
    //   message: 'Acción para crear',
    //   payload,
    //   body: {
    //     limit: 10,
    //     offset: 20,
    //     brand: 'marca',
    //   },
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
