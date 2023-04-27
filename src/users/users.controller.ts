import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['Ahmed', 'omar', 'farida'];
  }

  @Get(':id')
  findOne(@Param('id') id: any): string {
    return id;
  }

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() input: string): string {
    return input;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: any): string {
    return id;
  }
}
