import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/users.entity';
import { DataSource } from 'typeorm';

export interface UsernameQuery {
  username: string;
}

@Injectable()
export class DataSourceService {
  constructor(private dataSource: DataSource) {}

  userCustomRepository = this.dataSource.getRepository(UserEntity).extend({
    async filterUser(usernameQuery: UsernameQuery): Promise<UserEntity[]> {
      const { username } = usernameQuery;
      console.log(username);

      const query = this.createQueryBuilder('user');

      query.where('(LOWER(user.username) LIKE LOWER(:username))', {
        username: `%${username}%`,
      });
      return await query.getMany();
    },
  });
}