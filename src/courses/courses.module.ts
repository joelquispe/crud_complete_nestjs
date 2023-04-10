import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesEntity } from './courses.entity';
import { UserEntity } from 'src/users/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CoursesEntity,UserEntity])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
