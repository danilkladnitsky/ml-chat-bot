import { Inject } from '@nestjs/common';
import { TelegramContext } from 'domain/telegram';
import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { TelegramService } from './telegram.service';

@Update()
export class TelegramUpdate {
  constructor(
    @Inject(TelegramService) private readonly telegramService: TelegramService,
  ) {}

  @Start()
  async onStart(@Ctx() ctx: TelegramContext) {
    const botDialogRootMessage = await this.telegramService.getRootMessage();
    const dialogKeyboard =
      this.telegramService.createMessageKeyboard(botDialogRootMessage);

    await ctx.reply(botDialogRootMessage.text, dialogKeyboard);
  }

  @On('callback_query')
  async onMessage(@Ctx() ctx: TelegramContext) {
    const { callbackQuery } = ctx;

    const reply = await this.telegramService.handleCallbackQuery(
      //@ts-ignore
      callbackQuery.data,
    );

    if (!reply) {
      return;
    }

    const { text, keyboard } = reply;

    await ctx.reply(text, keyboard);
  }
}
