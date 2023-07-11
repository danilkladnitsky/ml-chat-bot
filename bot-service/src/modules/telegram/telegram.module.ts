import { Module } from '@nestjs/common';
import { ActivityRepositoryModule } from 'database/repository/activity/activity.repository.module';
import { MessageRepositoryModule } from 'database/repository/message/message.repository.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';
import { TelegramUpdate } from './telegram.update';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN,
    }),
    MessageRepositoryModule,
    ActivityRepositoryModule,
  ],
  controllers: [TelegramController],
  providers: [TelegramUpdate, TelegramService],
})
export class TelegramModule {}
