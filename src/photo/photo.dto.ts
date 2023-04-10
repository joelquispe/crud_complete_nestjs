import { UserEntity } from "src/users/user.entity";

export class PhotoDto{
    readonly name:string;
    
    readonly user:UserEntity;
}