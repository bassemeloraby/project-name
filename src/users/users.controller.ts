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
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
  private readonly users: UserEntity[] = [];
  @Get()
  find(): UserEntity[] {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: any): string {
    return id;
  }
}
