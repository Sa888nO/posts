import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedsService } from './seeds/seeds.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api');
  const seedService = app.get(SeedsService);
  await seedService.loadSeedData();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
