import { Inject } from '@nestjs/common';
import { TelegramContext } from 'domain/telegram';
import { Ctx, Start, Update } from 'nestjs-telegraf';
import { TelegramService } from './telegram.service';

@Update()
export class TelegramUpdate {
  constructor(
    @Inject(TelegramService) private readonly telegramService: TelegramService,
  ) {}

  @Start()
  async start(@Ctx() ctx: TelegramContext) {
    await ctx.reply('Welcome');
  }
}
