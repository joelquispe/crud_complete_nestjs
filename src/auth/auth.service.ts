import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDto } from './auth.dto';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import { AuthEntity } from './auth.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
    private jwtService : JwtService
  ) {}

  async login(body: any) {
    const user = await this.authRepository.findOne({
      where: { username: body.username },
    });
    if (!user) return new HttpException('USER_NOT_FOUND', 403);
    const checkPassword = await compare(body.password, user.password);
    if (!checkPassword) return new HttpException('PASSWORD_INCORRECT', 403);
    const payload = {id:user.id, username: user.username};
    const token = this.jwtService.sign(payload);
    const data = {
        user: user,
        token: token
    }
    return data;
  }
  findOne(id:number) {
    return this.authRepository.findOneBy({id:id});
  }
  async register(body: AuthDto) {
    const { password } = body;
    const plaintToHash = await hash(password, 10);
    body = { ...body, password: plaintToHash };
    return this.authRepository.save(body);
  }
}
