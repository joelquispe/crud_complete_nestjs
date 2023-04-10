import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { PhotoModule } from './photo/photo.module';
import { UserEntity } from './users/user.entity';
import { CoursesEntity } from './courses/courses.entity';
import { PhotoEntity } from './photo/photo.entity';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
import { AuthEntity } from './auth/auth.entity';

@Module({
  imports: [
    UsersModule,
    MulterModule.register({dest: './uploads'}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      synchronize: true,
      entities: [UserEntity, CoursesEntity, PhotoEntity,AuthEntity],
      database: 'crud_complete',
    }),
    
    CoursesModule,
    PhotoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
