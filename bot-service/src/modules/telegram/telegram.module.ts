import { Module } from '@nestjs/common';
import { TelegramUpdate } from './telegram.update';

@Module({
  controllers: [],
  providers: [TelegramUpdate],
})
export class TelegramModule {}
