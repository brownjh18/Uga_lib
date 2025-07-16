import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    profile_id: number;
    @Column()
    user_id: number;
    @Column()
    profile_picture: string; // URL or path to the profile picture
    @Column()
    bio: string; 
}
