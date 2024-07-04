import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CustomersModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user_vg',
    password: 'erwinSmith',
    database: 'nest_practice',
    entities: [],
    synchronize: true,
  })]
})
export class AppModule {}
