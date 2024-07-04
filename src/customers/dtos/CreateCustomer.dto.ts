import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsEmail()
    @IsNotEmpty()
    email: String;

    @IsNotEmpty()
    name: String;

    @ValidateNested()
    @Type(()=>CreateAddressDto)
    @IsNotEmptyObject()
    address: CreateAddressDto;
}