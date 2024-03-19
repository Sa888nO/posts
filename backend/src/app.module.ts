import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './Models/Post.model';
import { SeedsService } from './seeds/seeds.service';

@Module({
  imports: [
    PostsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5555,
      username: 'postgres',
      password: 'test12345',
      database: 'posts',
      models: [Post],
      autoLoadModels: true,
    }),
  ],
  controllers: [],
  providers: [SeedsService],
})
export class AppModule {}
