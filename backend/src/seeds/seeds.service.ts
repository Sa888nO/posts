import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Post } from 'src/models/post.model';
import seeds from './seeds';

@Injectable()
export class SeedsService {
  constructor(private readonly sequelize: Sequelize) {}
  async loadSeedData() {
    await this.sequelize.sync({ force: true });
    await Post.bulkCreate(seeds);
  }
}
