import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aggregator {
    @PrimaryGeneratedColumn()
    aggregator_id: number;
    @Column()
    aggregator_name: string;
    @Column()
    paymentMode_id: number;
}
