import { Body, Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
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
    @Get('/:id')
    findOne(@Param('id') id:number){
        return this.authService.findOne(id);
    }
}
