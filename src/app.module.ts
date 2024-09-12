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
import { ProductsModule } from './products/products.module';
import { ProductEntity } from './products/entities/product.entity';

@Module({
  imports: [
    
    MulterModule.register({dest: './uploads'}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bsco2inikslceay1ohsx-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uuoiotuemfzleijv',
      password: 'ecPr6w0e427UWbXH9hht',
      retryDelay: 5000,
      synchronize: true,
      entities: [UserEntity, CoursesEntity, PhotoEntity,AuthEntity,ProductEntity],
      database: 'bsco2inikslceay1ohsx',
    }),
    UsersModule,
    CoursesModule,
    PhotoModule,
    AuthModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
