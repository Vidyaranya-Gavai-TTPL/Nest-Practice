import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
    private users : User[] = [
        {
            id: 1,
            username: "user1",
            password: "user1"
        },
        {
            id: 2,
            username: "user2",
            password: "user2"
        },
        {
            id: 3,
            username: "user3",
            password: "user3"
        },
        {
            id: 4,
            username: "user4",
            password: "user4"
        }
    ];

    getusers(){
        return this.users.map((user)=> plainToClass(SerializedUser, user));
    }

    getuserById(id: number){
        return this.users.find((user)=>user.id===id)
    }

    getuserByUsername(username: String){
        return this.users.find((user)=>user.username===username)
    }
}
