import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from './photo.entity';
import { UserEntity } from 'src/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoEntity,UserEntity])],
  providers: [PhotoService],
  controllers: [PhotoController]
})
export class PhotoModule {}
