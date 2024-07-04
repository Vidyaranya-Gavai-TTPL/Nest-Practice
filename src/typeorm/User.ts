import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id'
    })
    id: number;

    @Column({
        nullable: false,
        default: ''
    })
    username: String;

    @Column({
        name: 'email_address',
        nullable: false,
    })
    emailAddress: String

    @Column()
    password: String;
}