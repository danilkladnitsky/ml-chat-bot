import { InjectRepository } from '@nestjs/typeorm';
import { ActivityEntity } from 'database/entities/activity.entity';
import { CreateActivityDto } from 'dto/activity';
import { Repository } from 'typeorm';

export class ActivityRepository {
  constructor(
    @InjectRepository(ActivityEntity)
    private readonly messageRepository: Repository<ActivityEntity>,
  ) {}

  getAll() {
    return this.messageRepository.find();
  }

  getById(id: Id) {
    return this.messageRepository.findOne({
      where: { id },
    });
  }

  create(message: CreateActivityDto) {
    return this.messageRepository.save(message);
  }
}
