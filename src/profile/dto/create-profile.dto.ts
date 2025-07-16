import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateProfileDto {
    @IsNotEmpty()
    user_id: number;

    @IsUrl()
    profile_picture: string;

    @IsString()
    bio: string;
}
