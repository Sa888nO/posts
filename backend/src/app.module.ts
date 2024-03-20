import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { SeedsService } from './seeds/seeds.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env' : '.env.prod',
    }),
    PostsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Post],
      autoLoadModels: true,
    }),
  ],
  controllers: [],
  providers: [SeedsService],
})
export class AppModule {}
