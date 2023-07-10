import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from 'database/entities/message.entity';
import { CreateMessageWithParentDto } from 'dto/telegram';
import { Repository } from 'typeorm';

export class MessageRepository {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {}

  getAll() {
    return this.messageRepository.find({
      relations: {
        parent: true,
        children: true,
      },
    });
  }

  getById(id: Id) {
    return this.messageRepository.findOne({
      where: { id },
      relations: {
        parent: true,
        children: true,
      },
    });
  }

  create(message: CreateMessageWithParentDto) {
    return this.messageRepository.save(message);
  }
}
