import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { AppRepository } from './app.repository';

@Module({
  imports: [RedisModule],
  controllers: [AppController],
  providers: [AppRepository, AppService],
})
export class AppModule {}
