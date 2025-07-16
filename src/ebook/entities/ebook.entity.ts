import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ebook {
    @PrimaryGeneratedColumn()
    ebook_id: number;
    @Column()
    title: string;
    @Column()
    author_id: number;
    @Column()
    publisher_id: number;
    @Column()
    plan_id: number;
    @Column()
    category_id: number;
}
