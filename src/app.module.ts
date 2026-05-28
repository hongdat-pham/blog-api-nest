import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { LoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';
@Module({
  imports: [PostsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
