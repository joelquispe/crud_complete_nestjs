import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesEntity } from './courses.entity';

@Controller('courses')
export class CoursesController {
    constructor(private courseService:CoursesService){}

    @Get('/')
    findAll(){
        return this.courseService.findAll();
    }

    @Post('/')
    create(@Body() body:CoursesEntity){
        return this.courseService.create(body);
    }

    
}
