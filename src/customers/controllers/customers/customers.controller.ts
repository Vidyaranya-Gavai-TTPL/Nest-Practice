import { Controller, Get, Param, Res, Req, ParseIntPipe, HttpException, HttpStatus, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService) { }

    @Get()
    getAllCustomers(@Req() req: Request, @Res() res: Response) {
        const customers = this.customerService.getAllCustomers();
        res.status(200).json(customers);
    }

    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id: number, @Req() req: Request, @Res() res: Response) {
        const customer = this.customerService.findCustomerById(id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(400).json({ msg: "Customer Not Found" })
        }
    }

    // NestJS Way
    @Get('/search/:id')
    searchCustomer(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customerService.findCustomerById(id);
        if (customer) return customer; // note that if you include responce object in the parameters, you have to return the responce through that object
        else throw new HttpException('Customer Not Found', HttpStatus.NOT_FOUND);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customerService.createCustomer(createCustomerDto);
    }
}