import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from './photo.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private photoRepository: Repository<PhotoEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  findAll() {
    return this.photoRepository.find({
        relations: {
            user: true
        }
    });
  }

  async create(body: any) {
    console.log(body);
    const user =await  this.userRepository.findOneByOrFail({id:body.user_id});
    console.log(user);
    const newPhoto = new PhotoEntity();
    newPhoto.name = body.name;
    newPhoto.url = body.url;
    newPhoto.user = user;
    return this.photoRepository.save(newPhoto);
  }
}
