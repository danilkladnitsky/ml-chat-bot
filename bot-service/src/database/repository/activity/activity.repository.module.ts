import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from 'database/entities/activity.entity';
import { ActivityRepository } from './activity.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityEntity])],
  providers: [ActivityRepository],
  exports: [ActivityRepository],
})
export class ActivityRepositoryModule {}
