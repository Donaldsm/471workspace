import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Users } from "./Users";

@Entity()
export class PurchaseOrders {

    @PrimaryGeneratedColumn()
    po_number: number;

    @Column()
    date: string;

    @ManyToOne(type => Users, users => users.id)
    user: Users;
}