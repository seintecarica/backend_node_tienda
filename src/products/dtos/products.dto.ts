import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

//PartialType nos ahorra especificar cada atributo como opcional
export class UpdateProductDto extends PartialType(CreateProductDto){
  // readonly name?: string;
  // readonly description?: string;
  // readonly price?: number;
  // readonly stock?: number;
  // readonly image?: string;
}
