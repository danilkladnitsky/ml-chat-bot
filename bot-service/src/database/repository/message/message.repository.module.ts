import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from 'database/entities/message.entity';
import { MessageRepository } from './message.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  providers: [MessageRepository],
  exports: [MessageRepository],
})
export class MessageRepositoryModule {}
