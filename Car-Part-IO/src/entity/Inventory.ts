import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Parts } from "./Parts";
import { Locations } from "./Locations";


@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    inventory_id: number;

    @ManyToOne(type => Locations, location => location.inventory)
    lid: Locations;

    @ManyToOne(type => Parts, parts => parts.inventory)
    part_number: Parts;

    @Column()
    price: number;

    @Column()
    qty: number;

    @Column()
    url: string;
}