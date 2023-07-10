import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from 'database/entities/message.entity';
import { Repository } from 'typeorm';

export class MessageRepository {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {}

  getAll() {
    return this.messageRepository.find();
  }

  getById(id: Id) {
    return this.messageRepository.findOne({ where: { id } });
  }
}
