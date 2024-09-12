import { Body, Controller, Get, Param, Post, Query, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    
    @Post()
    register(@Body() body:AuthDto){
        return this.authService.register(body);
    }
    
    @Post('/login')
    login(@Body() body:AuthDto){
        return this.authService.login(body);
    }

    // @UseGuards(AuthGuard('jwt'))
    @UseGuards(RolesGuard)
    @Roles('admin','member')
    @Post('/hola')
    hola(@Res() res:any){
        return res.send("joel") 
    }
    @Get('profile')
    findOne(@Query('username') username:string){
        return this.authService.findOne(username);
    }
}
