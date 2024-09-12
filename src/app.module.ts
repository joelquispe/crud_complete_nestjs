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
      type: 'postgres',
      host: 'dpg-crh51c56l47c73c2n7f0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'demo',
      password: 'ssVEv10411XUus2amIjMgW1LQvh4pzIG',
      retryDelay: 5000,
      synchronize: true,
      ssl: true,
      entities: [UserEntity, CoursesEntity, PhotoEntity,AuthEntity,ProductEntity],
      database: 'demo_08yz',
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
