import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { User as UserEntity } from 'src/typeorm/User';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
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
    async getById(@Param('id', ParseIntPipe) id: number){
        const user = await this.userService.getuserById(id);
        console.log(user);

        if(user) return user;
        else throw new UserNotFoundException(`User with id: ${id} does not exist`, 400);
    }

    // @UseInterceptors(ClassSerializerInterceptor)
    // @Get('/username/:username')
    // getByUsername(@Param('username') username: String){
    //     const user = this.userService.getuserByUsername(username);

    //     if(user) return new SerializedUser(user);
    //     else throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    // }

    @Post('/create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Put('/update/:id')
    async updateUser(@Body() updateData: Partial<UserEntity>, @Param('id', ParseIntPipe) id: number): Promise<UserEntity>{
        return this.userService.updateUser(id, updateData);
    }

    @Delete('/delete/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        this.userService.deleteUser(id);
        return ({message: 'User Deleted Successfully...'})
    }
}
