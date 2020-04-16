import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Parts } from "./Parts";
import { Locations } from "./Locations";


@Entity()
export class Inventory {

  @PrimaryGeneratedColumn()
  inventory_id: number;

  @ManyToOne(type => Locations, location => location.inventory)
  location: Locations;

  @ManyToOne(type => Parts, parts => parts.inventory)
  part_number: Parts;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  qty: number;

  @Column({ nullable: true })
  url: string;
}
