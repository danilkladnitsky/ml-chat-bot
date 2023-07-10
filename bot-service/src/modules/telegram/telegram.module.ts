import { Module } from '@nestjs/common';
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
  ],
  controllers: [TelegramController],
  providers: [TelegramUpdate, TelegramService],
})
export class TelegramModule {}
