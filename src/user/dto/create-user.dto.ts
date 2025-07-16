import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Role } from "src/role/entities/role.entity";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    role: string;
}
