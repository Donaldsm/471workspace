import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Inventory } from "./Inventory";

@Entity()
export class Locations {

    @PrimaryGeneratedColumn()
    lid: number;

    @Column()
    streetNumber: number;

    @Column()
    streetName: string;

    @Column()
    city: string;

    @Column()
    stateProvince: string; // sorry for the naming just trying to say it could be either

    @Column()
    postalZip: string; // sorry for the naming just trying to say it could be either

    @ManyToMany(type => Inventory, inventory => inventory.lid, {
        cascade: true
    })
    @JoinTable()
    inventory: Locations[];

}