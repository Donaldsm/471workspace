import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Parts } from "./Parts";
import { Users } from "./Users";

@Entity()
export class PartsBought {

  @PrimaryGeneratedColumn()
  history_id: number;

  @ManyToOne(type => Parts, part => part.history)
  part_Number: Parts;

  @ManyToOne(type => Users, users => users.purchase_orders)
  order_num: Users;

  @Column({ nullable: false })
  qty: number;
}
