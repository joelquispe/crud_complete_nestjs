import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';


@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    @Post('/')
    create(@Body() body:UserDto){
        
        return this.userService.create(body);
    }
    
    // @UseGuards(AuthGuard('jwt'))
    // @UseGuards(RolesGuard)
    // @Roles('admin','member')
    @Get('/')
    findAlll(){
        return this.userService.findAll();
    }

    
    

}
