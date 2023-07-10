import { TelegramContext } from 'domain/telegram';
import { Ctx, Start, Update } from 'nestjs-telegraf';

@Update()
export class TelegramUpdate {
  @Start()
  async start(@Ctx() ctx: TelegramContext) {
    await ctx.reply('Welcome');
  }
}
