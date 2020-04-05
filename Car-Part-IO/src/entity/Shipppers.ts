import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Merchants} from "./Merchants";
import { Locations } from "./Locations";

@Entity()
export class Shippers {

    @PrimaryGeneratedColumn()
    sid: number;

    @Column()
    name: string;

    @Column()
    contact: string;

    @ManyToMany(type => Merchants, merchants => merchants.mid)
    @JoinTable({
        name: "merch_uses",
        joinColumn: {
            name: "sid",
            referencedColumnName: "sid"
        },
        inverseJoinColumn: {
            name: "mid",
            referencedColumnName: "mid"
        }
    })
    merchants: Merchants[];

    @ManyToMany(type => Locations, location => location.lid)
    @JoinTable({
        name: " ships_from",
        joinColumn: {
            name: "sid",
            referencedColumnName: "sid"
        },
        inverseJoinColumn: {
            name: "lid",
            referencedColumnName: "lid"
        }
    })
    pickups: Locations[];


}