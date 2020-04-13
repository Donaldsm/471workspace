import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class PurchaseOrders {

  @PrimaryGeneratedColumn()
  po_number: number;

  @Column()
  date: string;

  @ManyToOne(type => Users, users => users.purchase_orders)
  user: Users;
}
