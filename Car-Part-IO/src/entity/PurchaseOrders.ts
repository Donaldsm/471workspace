import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class PurchaseOrders {

    @PrimaryGeneratedColumn()
    poNumber: number;

    @Column()
    date: string;
}