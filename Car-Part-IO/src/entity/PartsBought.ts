import { Entity, Column, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Parts } from "./Parts";
import { PurchaseOrders } from "./PurchaseOrders";

@Entity()
export class PartsBought {

    @PrimaryGeneratedColumn()
    historyId: number;

    @ManyToMany(type => Parts, parts => parts.partNumber)
    @JoinTable()
    parts: Parts[];

    @ManyToOne(type => PurchaseOrders, purchaseOrder => purchaseOrder.poNumber)
    @JoinTable()
    orderNum: PurchaseOrders;

    @Column()
    qty: number;
}