import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/file')
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination: './uploads',
      filename: function(req,file,cb){
        cb(null,file.originalname +'_'+Date.now()+'.jpg')
      }
    })
  }))
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    console.log('file',file)
    return 'file upload';
  }
}
