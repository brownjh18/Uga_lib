import { IsNotEmpty, IsString } from "class-validator";

export class CreateContentDto {
    @IsString()
    @IsNotEmpty()
    content_name: string;

    @IsString()
    @IsNotEmpty()
    content_description: string;

    @IsString()
    @IsNotEmpty()
    content_type: string;
}
