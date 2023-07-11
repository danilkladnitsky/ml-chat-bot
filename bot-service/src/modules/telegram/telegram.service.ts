import { Inject } from '@nestjs/common';
import { Keyboard } from 'telegram-keyboard';

import { MessageEntity } from 'database/entities/message.entity';
import { MessageRepository } from 'database/repository/message/message.repository';
import { CreateMessageDto, CreateMessageWithParentDto } from 'dto/telegram';
import { makeCallbackQuery } from 'utils/makeCallbackQuery';
import { parseCallbackQuery } from 'utils/parseCallbackQuery';

export class TelegramService {
  constructor(
    @Inject(MessageRepository)
    private readonly messageRepository: MessageRepository,
  ) {}

  getRootMessage() {
    return this.messageRepository.getById(1);
  }

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

  async handleCallbackQuery(query: string) {
    const targetMessageId = parseCallbackQuery<Id | null>(query);

    if (!targetMessageId) {
      return;
    }

    const message = await this.messageRepository.getById(targetMessageId);

    if (!message) {
      return;
    }

    return {
      text: message.text,
      keyboard: this.createMessageKeyboard(message),
    };
  }

  createMessageKeyboard(message: MessageEntity) {
    const childrenMessages = message.children;

    if (childrenMessages.length === 0) {
      return null;
    }

    const buttons = childrenMessages.map((msg) => ({
      callback_data: makeCallbackQuery(msg.id),
      text: msg.keyboard_link || msg.text,
    }));

    return Keyboard.make(buttons).inline();
  }
}
