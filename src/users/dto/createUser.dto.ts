import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @MinLength(3)
    username: String;

    @IsNotEmpty()
    @IsEmail()
    email: String;

    @IsNotEmpty()
    @MinLength(8)
    password: String;
}