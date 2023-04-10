import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CoursesEntity } from 'src/courses/courses.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(CoursesEntity)
    private courseRepository: Repository<CoursesEntity>,
  ) {}

  findAll() {
    return this.userRepository.find({
        relations:{
            courses: true,
            photos: true,
            
        }
    });
  }
  

  async create(body: any) {
    const newUser = new UserEntity();
    newUser.username = body.username;
    newUser.password = body.password;
    
    const coursesIds = body.coursesIds;
    const courses :CoursesEntity[] =[];
    for(const ids of coursesIds) {
        courses.push(await this.courseRepository.findOneBy({id: parseInt(ids)}))
    }
    newUser.courses = courses;
    console.log(courses)
    return this.userRepository.save(newUser);
  }
}
