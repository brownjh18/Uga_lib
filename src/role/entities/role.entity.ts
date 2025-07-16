import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    role_id: number;

    @Column()
    role_name: string;

    @Column()
    description: string;

    @OneToMany(() => User, user => user.role)
    users: User;
}
