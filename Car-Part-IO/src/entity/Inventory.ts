import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import { Parts } from "./Parts";
import { Locations } from "./Locations";


@Entity()
export class Inventory {

    @ManyToMany(type => Locations, location => location.inventory)
    lid: Locations[];

    @ManyToMany(type => Parts, part => part.inventory)
    partNumber: Parts[];

    @Column()
    price: number;

    @Column()
    qty: number;

    @Column()
    url: string;
}