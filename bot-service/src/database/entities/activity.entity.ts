import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('activity')
export class ActivityEntity extends BaseEntity {
  @Column()
  message_id: Id;

  @Column()
  deepLevel: number;

  @Column()
  hasAttachments: boolean;

  @Column()
  messageLength: number;

  @Column()
  buttonsNumber: number;

  @Column({ default: false })
  reachedGoal: boolean;
}
