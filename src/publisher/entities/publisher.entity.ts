import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Publisher {
    @PrimaryGeneratedColumn()
    publisher_id: number;
    @Column()
    publisher_name: string;
}
