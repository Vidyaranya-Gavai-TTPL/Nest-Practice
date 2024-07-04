import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
    private users : User[] = [
        {
            username: "user1",
            password: "user1"
        },
        {
            username: "user2",
            password: "user2"
        },
        {
            username: "user3",
            password: "user3"
        },
        {
            username: "user4",
            password: "user4"
        }
    ];

    getusers(){
        return this.users.map((user)=> plainToClass(SerializedUser, user));
    }

    getuserByUsername(username: String){
        return this.users.find((user)=>user.username===username)
    }
}
