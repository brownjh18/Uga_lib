import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserBook {
    @PrimaryGeneratedColumn()
    userBook_id: number;

    @Column()
    user_id: number;

    @Column()
    book_id: number;
}
