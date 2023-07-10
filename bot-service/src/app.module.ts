import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { TelegramModule } from 'modules/telegram/telegram.module';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule, TelegramModule],
  controllers: [AppController],
})
export class AppModule {}
