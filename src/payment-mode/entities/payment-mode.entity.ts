import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PaymentMode {
    @PrimaryGeneratedColumn()
    paymentMode_id: number;
    @Column()
    paymentMode_name: string;
}
