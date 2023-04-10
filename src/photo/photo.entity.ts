import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  RelationId
} from 'typeorm';
import { UserEntity } from '../users/user.entity';

@Entity('photos')
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToOne(() => UserEntity, (user) => user.photos)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @RelationId((photo:PhotoEntity)=>photo.user)
  user_id: number;
}
