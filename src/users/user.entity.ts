import { CoursesEntity } from 'src/courses/courses.entity';
import { PhotoEntity } from 'src/photo/photo.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany,OneToMany,JoinTable } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username : string;

  @Column()
  password : string;

  

  @ManyToMany(()=>CoursesEntity,(couses)=>couses.users)
  @JoinTable({
    name: 'courses_users',
    joinColumn: {
      name:'user_id',
    },
    inverseJoinColumn:{
      name: 'course_id',
    }
  })
  courses: CoursesEntity[]

  @OneToMany(()=>PhotoEntity,(photo)=>photo.user)
  photos: PhotoEntity[]
}
