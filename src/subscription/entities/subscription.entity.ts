import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn()
    subscription_id: number;
    @Column()
    user_id: number;
    @Column()
    plan_id: number;
    @Column()
    start_date: Date;
    @Column()
    end_date: Date;
    @Column()
    status: string;
}
