import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Parts } from "./Parts";
import { PurchaseOrders } from "./PurchaseOrders";

@Entity()
export class PartsBought {
    @ManyToMany(type => Parts, parts => parts.partNumber)
    parts: Parts[];

    @ManyToOne(type => PurchaseOrders, purchaseOrder => purchaseOrder.poNumber)
    orderNum: PurchaseOrders;

    @Column()
    qty: number;
}