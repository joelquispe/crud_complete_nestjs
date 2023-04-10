import { UserEntity } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('courses')
export class CoursesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(()=>UserEntity,(user)=>user.courses)
  users: UserEntity[]
}
