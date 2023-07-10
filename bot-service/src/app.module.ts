import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramModule } from 'modules/telegram/telegram.module';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN,
    }),
    TelegramModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
