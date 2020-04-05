import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable} from "typeorm";
import {Manufacturers} from "./Manufacturers";
import {Shippers} from "./Shipppers";
import { Locations } from "./Locations";

@Entity()
export class Merchants {

    @PrimaryGeneratedColumn()
    mid: number;

    @Column()
    name: string;

    @Column()
    website: string;

    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    store_url: string;

    @Column()
    type: string;

    @ManyToMany(type => Manufacturers, manufacturers => manufacturers.manu_id)
    @JoinTable({
        name:"buys_from",
        joinColumn: {
            name: "mid",
            referencedColumnName: "mid"
        },
        inverseJoinColumn: {
            name: "manu_id",
            referencedColumnName: "manu_id"
        } 
    })
    manuid: Manufacturers[];

    @ManyToMany(type => Shippers, shippers => shippers.sid)
    @JoinTable({
        name:"merch_uses",
        joinColumn: {
            name: "mid",
            referencedColumnName: "mid"
        },
        inverseJoinColumn: {
            name: "sid",
            referencedColumnName: "sid"
        }
    })
    shippers: Shippers[];

    @ManyToMany(type => Locations, locations => locations.lid)
    @JoinTable({
        name: "merch_locations",
        joinColumn: {
            name: "mid",
            referencedColumnName: "mid"
        },
        inverseJoinColumn: {
            name:"lid",
            referencedColumnName: "lid"
        }
    })
    locations: Locations[];
}