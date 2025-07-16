import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    author_id: number;
    @Column()
    author_name: string;
    @Column()
    biography: string;
}
