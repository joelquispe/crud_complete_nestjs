import { Injectable } from '@nestjs/common';
import { CoursesEntity } from './courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CoursesEntity)
    private courseRepository: Repository<CoursesEntity>,
  ) {}

  create(body :any){
    return this.courseRepository.save(body);
  }

  findAll(){
    return this.courseRepository.find({
        relations:{
            users: true
        }
    });
  }
}
