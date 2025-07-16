import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    role_id: number;
    @Column()
    role_name: string;
    @Column()
    description: string;

    constructor(role_name: string, description: string) {
        this.role_name = role_name;
        this.description = description;
    }
}
