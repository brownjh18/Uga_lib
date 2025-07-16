import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    plan_id: number;
    @Column()
    plan_name: string;
    @Column()
    plan_description: string;
}
