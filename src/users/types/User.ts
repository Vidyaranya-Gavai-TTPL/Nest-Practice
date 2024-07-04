import { Exclude } from "class-transformer";

export interface User {
    username: String;
    password: String;
}

export class SerializedUser{
    username: String;

    @Exclude()
    password: String;

    constructor(partial: Partial<SerializedUser>){
        Object.assign(this, partial);
    }
}