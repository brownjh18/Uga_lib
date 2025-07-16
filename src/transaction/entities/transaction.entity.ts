import { Subscription } from "rxjs";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    transaction_id: number;

    @Column()
    transaction_date: Date;

    @Column()
    amount: number;

    @Column()
    status: string; // 'completed', 'pending', 'failed'

    @Column()
    currency: string; // 'UGX"

    @ManyToOne(() => User, user => user.transactions)
    user: User;

    @ManyToOne(() => Subscription)
    subscription: Subscription;
}
