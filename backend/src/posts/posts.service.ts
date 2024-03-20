import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from 'src/models/post.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post)
    private postModel: typeof Post,
  ) {}
  getPosts() {
    return this.postModel.findAll();
  }
  async createPost(newPost: CreatePostDto) {
    await Post.create({
      title: newPost.title,
      description: newPost.description,
    });
  }
}
