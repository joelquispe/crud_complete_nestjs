import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector:Reflector,private authService:AuthService){}
    async canActivate(context: ExecutionContext):  Promise<boolean>{
        const roles = this.reflector.get<string[]>('roles',context.getHandler());
        const request = context.switchToHttp().getRequest();
        console.log(request)
        if(request){
            const {id} = request.body;
            const user = await this.authService.findOne(id);
            console.log(user)
            return user.role === "admin";
        }
        console.log(roles);
        return false;
    }
}