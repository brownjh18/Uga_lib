import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => User, user => user.subscriptions)
    user: User;
}
