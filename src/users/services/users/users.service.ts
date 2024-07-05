import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User as UserEntity} from 'src/typeorm/User';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { SerializedUser, User } from 'src/users/types/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}

    private users : User[] = [];

    getusers(){
        // return this.users.map((user)=> plainToClass(SerializedUser, user));
        return this.userRepository.find();
    }

    async getuserById(id: number): Promise<UserEntity | null>{
        // return this.users.find((user)=>user.id===id)
        const user = await this.userRepository.findOneBy({id});
        return user;
    }

    // getuserByUsername(username: String){
    //     return this.users.find((user)=>user.username===username)
    // }

    createUser(createUserDto: CreateUserDto){
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, updateData: Partial<UserEntity>): Promise<UserEntity>{
        const user = await this.userRepository.findOneBy({id});
        
        if(!user) return null;

        Object.assign(user, updateData);
        console.log(user);
        return await this.userRepository.save(user);
        // // const result = await this.userRepository.update(id, updateData);
        // return null;
    }

    async deleteUser(id: number): Promise<void>{
        await this.userRepository.delete(id);
    }
}
