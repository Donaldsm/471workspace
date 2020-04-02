import {Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm";
import { Shippers } from "./Shipppers";
import { type } from "os";
import { Locations } from "./Locations";

@Entity()
export class ShipsFrom {

    @PrimaryGeneratedColumn()
    routeId: number;

    @ManyToMany(type => Shippers, shipper => shipper.sid)
    @JoinTable()
    sid: Shippers[];

    @ManyToMany(type => Locations, location => location.lid)
    @JoinTable()
    lid: Locations[];


}