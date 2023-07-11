import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('activity')
export class Activity extends BaseEntity {
  @Column()
  message_id: Id;
}
