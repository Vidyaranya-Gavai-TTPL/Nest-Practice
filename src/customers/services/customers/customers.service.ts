import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    users = [
        {
            id: 1,
            email: "johndoe@gmail.com",
            createdAt: new Date()
        },
        {
            id: 2,
            email: "janesmith@gmail.com",
            createdAt: new Date()
        },
        {
            id: 3,
            email: "arthurdayne@gmail.com",
            createdAt: new Date()
        },
        {
            id: 4,
            email: "bobcoyle@gmail.com",
            createdAt: new Date()
        }
    ]
    getAllCustomers(){
        return this.users;
    }
    findCustomerById(id: number){
        return this.users.find((user)=>user.id===id);
    }
}
