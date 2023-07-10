import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('message')
export class MessageEntity extends BaseEntity {
  // telegram content fields
  @Column()
  text: MessageText;

  // tree  implementation
  @OneToMany(() => MessageEntity, (message) => message.id)
  children: MessageEntity[];

  @ManyToOne(() => MessageEntity, (message) => message.children)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  parent: MessageEntity;
}
