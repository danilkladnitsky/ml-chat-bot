import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('message')
export class MessageEntity extends BaseEntity {
  // telegram content fields
  @Column({ nullable: true })
  text: MessageText;

  @Column({ nullable: true })
  keyboard_link: string;

  // tree  implementation
  @OneToMany(() => MessageEntity, (message) => message.parent)
  children: MessageEntity[];

  @ManyToOne(() => MessageEntity, (message) => message.children)
  parent: MessageEntity;
}
