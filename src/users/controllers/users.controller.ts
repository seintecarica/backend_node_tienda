import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from '../../users/services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {} //Inyección de dependencia deñ Services

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOrdersByUser(id);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.userService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number){
    return this.userService.remove(id);
  }
}
