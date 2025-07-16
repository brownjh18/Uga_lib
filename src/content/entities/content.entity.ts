import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Content {
    @PrimaryGeneratedColumn()
    content_id: number;
    @Column()
    content_name: string;
    @Column()
    content_description: string;
    @Column()
    content_type: string; // e.g., 'text', 'image', 'video'
}
