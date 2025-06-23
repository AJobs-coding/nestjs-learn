import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { GlobalController } from './global/global.controller';
import { GlobalModule } from './global/global.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';
import {config} from 'src/config';

const dbConfig = config.getSync('datasource'); // 从 config.yaml 中获取数据库配置

/**
 * 这是根模块
 */

@Module({
  imports: [CatsModule, GlobalModule, UsersModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      url: dbConfig.url,
      // host: dbConfig.host,
      // port: dbConfig.port,
      // username: dbConfig.username,
      // password: dbConfig.password,
      // database: dbConfig.database,
      //entities: [User],
      autoLoadEntities: true, // 优化我们手动去指定 entities
      poolSize: 200,
      // synchronize: true,
      extra: {
        connectionLimit: 200,
      },
    })

  ], // 引入其他模块
  controllers: [AppController, GlobalController],
  providers: [AppService],
})
export class AppModule {}
