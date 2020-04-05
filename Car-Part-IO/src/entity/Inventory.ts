import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Parts } from "./Parts";
import { Locations } from "./Locations";


@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    inventory_id: number;

    @ManyToMany(type => Locations, location => location.inventory)
    @JoinTable({
        name:"location_inventory",
        joinColumn:{
            name: "inventory_id",
            referencedColumnName: "inventory_id"
        },
        inverseJoinColumn:{
            name: "lid",
            referencedColumnName: "lid"
        }
    })
    lid: Locations[];

    @ManyToMany(type => Parts, parts => parts.part_number)
    @JoinTable({
        name: "soldby",
        joinColumn: {
            name: "inventory_id",
            referencedColumnName: "inventory_id"
        },
        inverseJoinColumn: {
            name: "part_number",
            referencedColumnName: "part_number"
        }
    })
    part_number: Parts[];

    @Column()
    price: number;

    @Column()
    qty: number;

    @Column()
    url: string;
}