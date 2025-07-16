import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    transaction_id: number;
    @Column()
    user_id: number;
    @Column()
    subscription_id: number;
    @Column()
    transaction_date: Date;
    @Column()
    amount: number;
    @Column()
    status: string; // 'completed', 'pending', 'failed'
    @Column()
    currency: string; // 'UGX"
}
