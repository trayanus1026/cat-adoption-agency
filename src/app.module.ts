import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from './datasource/typeorm.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule, CoreModule, CatsModule, UsersModule],
})
export class AppModule {}
