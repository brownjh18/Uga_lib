import { Subscription } from "rxjs";
import { Profile } from "src/profile/entities/profile.entity";
import { Role } from "src/role/entities/role.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column()
    email: string;

    @Column()
    contact: string;

    @Column()
    password: string;

    @OneToOne(() => Profile, profile => profile.user, { cascade: true })
    @JoinColumn()
    profile: Profile;

    @ManyToOne(() => Role, role => role.users)
    role: Role;

    @OneToMany(() => Subscription, subscription => subscription.user)
    subscriptions: Subscription[];

    @OneToMany(() => Transaction, transaction => transaction.user)
    transactions: Transaction[];
}
