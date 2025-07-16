import { Role } from "src/role/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({
        // type: 'enum',
        // enum: Role,
        // default: Role.student
    })
    role: string;
}
