import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            email: "johndoe@gmail.com",
            name: "John Doe"
        },
        {
            id: 2,
            email: "janesmith@gmail.com",
            name: "Jane Smith"
        },
        {
            id: 3,
            email: "arthurdayne@gmail.com",
            name: "Arthur Dayne"
        },
        {
            id: 4,
            email: "bobcoyle@gmail.com",
            name: "Bob Coyle"
        }
    ]
    getAllCustomers(){
        return this.customers;
    }
    findCustomerById(id: number){
        return this.customers.find((user)=>user.id===id);
    }
    createCustomer(customerDto: CreateCustomerDto){
        this.customers.push(customerDto)
    }
}
