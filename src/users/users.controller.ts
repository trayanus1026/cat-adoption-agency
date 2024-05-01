import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { CreateUser, UsersService } from './users.service';
import { UsernameQuery } from 'src/datasource/datasource.service';
import { UserEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  async signUp(@Body() user: CreateUser) {
    return await this.userService.createUser(user);
  }

  @Get('')
  async filterUser(
    @Query() usernameQuery: UsernameQuery
  ): Promise<UserEntity[]> {
    return await this.userService.filterByUsername(usernameQuery);
  }
}