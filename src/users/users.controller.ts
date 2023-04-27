import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['Ahmed', 'omar', 'farida'];
  }

  @Get()
  findOne(): string {
    return 'one user';
  }

  @Post()
  create(): string {
    return 'creating user';
  }
  @Patch()
  update(): string {
    return 'update user';
  }
  @Delete()
  remove(): string {
    return 'delete user';
  }
}
