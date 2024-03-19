import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';
import { CreatePostDto } from './dto/createPost.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly PostsService: PostsService) {}

  @Get()
  async getPosts(): Promise<PostDto[]> {
    return this.PostsService.getPosts();
  }
  @UsePipes(new ValidationPipe())
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    this.PostsService.createPost(createPostDto);
  }
}
