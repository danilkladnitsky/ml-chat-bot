import { MessageEntity } from 'database/entities/message.entity';

export class CreateMessageDto {
  parentId: Id;
  text: MessageText;
}

export class CreateMessageWithParentDto {
  parent: MessageEntity;
  text: MessageText;
}
