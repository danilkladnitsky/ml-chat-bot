import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from 'dto/telegram';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(
    @Inject(TelegramService) private readonly telegramService: TelegramService,
  ) {}

  @Get('messages')
  getMessages() {
    return this.telegramService.getMessages();
  }

  @Get('messages/:id')
  getMessagesById(@Param('id') id: Id) {
    return this.telegramService.getMessageById(id);
  }

  @Post('messages')
  createMessage(@Body() dto: CreateMessageDto) {
    return this.telegramService.createMessage(dto);
  }
}
