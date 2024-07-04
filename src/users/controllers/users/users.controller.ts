import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
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
    @Get('/:username')
    getByUsername(@Param('username') username: String){
        const user = this.userService.getuserByUsername(username);

        if(user) return new SerializedUser(user);
        else throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
}
