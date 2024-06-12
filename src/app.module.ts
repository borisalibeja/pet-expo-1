import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, AnimalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
