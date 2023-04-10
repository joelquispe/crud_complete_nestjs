import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoDto } from './photo.dto';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  @Get('/')
  findAll() {
    return this.photoService.findAll();
  }

  @Post('/')
  create(@Body() body: PhotoDto) {
    return this.photoService.create(body);
  }
}
