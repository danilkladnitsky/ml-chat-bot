import { Inject } from '@nestjs/common';
import { MessageRepository } from 'database/repository/message/message.repository';

export class TelegramService {
  constructor(
    @Inject(MessageRepository)
    private readonly messageRepository: MessageRepository,
  ) {}
}
