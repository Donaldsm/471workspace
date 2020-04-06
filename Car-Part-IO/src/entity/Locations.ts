import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToMany} from "typeorm";
import { Inventory } from "./Inventory";
import { Merchants } from "./Merchants";
import { Shippers } from "./Shipppers";

@Entity()
export class Locations {

    @PrimaryGeneratedColumn()
    lid: number;
    // all of these columns are required to be non null 
    @Column()
    street_number: number;

    @Column()
    street_name: string;

    @Column()
    city: string;

    @Column()
    state_province: string; // sorry for the naming just trying to say it could be either

    @Column()
    postal_zip: string; // sorry for the naming just trying to say it could be either

    @OneToMany(type => Inventory, inventory => inventory.lid)
    inventory: Inventory[];

    @ManyToMany(type => Merchants, merchants => merchants.locations)
    @JoinTable({
        name: "merch_locations",
        joinColumn: {
            name: "lid",
            referencedColumnName: "lid"
        },
        inverseJoinColumn: {
            name:"mid",
            referencedColumnName: "mid"
        }
    })
    merchants: Merchants[];

    @ManyToMany(type => Shippers, shipper => shipper.pickups)
    @JoinTable({
        name: "ships_from",
        joinColumn: {
            name: "lid",
            referencedColumnName: "lid"
        },
        inverseJoinColumn: {
            name: "sid",
            referencedColumnName: "sid"
        }
    })
    sid: Shippers[];
}