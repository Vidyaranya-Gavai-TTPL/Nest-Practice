import { Exclude } from "class-transformer";

export interface User {
    id: number;
    username: String;
    password: String;
}

export class SerializedUser{
    id: number;
    username: String;

    @Exclude()
    password: String;

    constructor(partial: Partial<SerializedUser>){
        Object.assign(this, partial);
    }
}