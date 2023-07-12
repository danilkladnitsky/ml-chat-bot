import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageRepository } from 'database/repository/message/message.repository';

export class MlService {
  constructor(
    @Inject('ML_SERVICE') private client: ClientProxy,
    @Inject(MessageRepository) private messageRepository: MessageRepository,
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  async ping() {
    const pattern = { cmd: 'ping' };
    return this.client.send(pattern, {});
  }

  async predict(id: Id, features: string[]) {
    const message = await this.messageRepository.getById(id);

    if (!message) {
      return;
    }

    const pattern = { cmd: 'predict' };

    return this.client.send(pattern, {
      features: features,
      predictClass: message,
    });
  }
}
