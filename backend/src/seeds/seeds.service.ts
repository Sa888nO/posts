import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Post } from 'src/Models/Post.model';
import seeds from './seeds';

@Injectable()
export class SeedsService {
  constructor(private readonly sequelize: Sequelize) {}
  async loadSeedData() {
    await this.sequelize.sync({ force: true }); // Удаляем все существующие данные

    await Post.bulkCreate(seeds); // Загружаем seed-данные
  }
}
