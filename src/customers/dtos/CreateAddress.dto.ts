import { IsNotEmpty } from "class-validator";

export class CreateAddressDto{
    @IsNotEmpty()
    line1: String;
    line2?: String;

    @IsNotEmpty()
    zip: String;

    @IsNotEmpty()
    city: String;

    @IsNotEmpty()
    state: String;
}