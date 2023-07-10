import { Inject } from '@nestjs/common';
import { MessageRepository } from 'database/repository/message/message.repository';
import { CreateMessageDto, CreateMessageWithParentDto } from 'dto/telegram';

export class TelegramService {
  constructor(
    @Inject(MessageRepository)
    private readonly messageRepository: MessageRepository,
  ) {}

  getMessages() {
    return this.messageRepository.getAll();
  }

  getMessageById(id: Id) {
    return this.messageRepository.getById(id);
  }

  async createMessage(message: CreateMessageDto) {
    const parentMessage = await this.getMessageById(message.parentId);
    const dtoWithParent: CreateMessageWithParentDto = {
      ...message,
      parent: parentMessage,
    };

    return this.messageRepository.create(dtoWithParent);
  }
}
