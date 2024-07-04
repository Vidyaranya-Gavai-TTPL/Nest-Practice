import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/User';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService:UsersService){}

    @Get()
    getUsers(){
        return this.userService.getusers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/id/:id')
    getById(@Param('id', ParseIntPipe) id: number){
        const user = this.userService.getuserById(id);

        if(user) return new SerializedUser(user);
        else throw new UserNotFoundException(`User with id: ${id} does not exist`, 400);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/username/:username')
    getByUsername(@Param('username') username: String){
        const user = this.userService.getuserByUsername(username);

        if(user) return new SerializedUser(user);
        else throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
}
