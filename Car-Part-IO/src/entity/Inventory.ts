import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Parts } from "./Parts";
import { Locations } from "./Locations";


@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    inventoryId: number;

    @ManyToMany(type => Locations, location => location.inventory)
    @JoinTable()
    lid: Locations[];

    @ManyToMany(type => Parts, part => part.inventory)
    @JoinTable()
    partNumber: Parts[];

    @Column()
    price: number;

    @Column()
    qty: number;

    @Column()
    url: string;
}