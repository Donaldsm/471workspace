import {Entity, ManyToMany} from "typeorm";
import { Shippers } from "./Shipppers";
import { type } from "os";
import { Locations } from "./Locations";

@Entity()
export class ShipsFrom {
    @ManyToMany(type => Shippers, shipper => shipper.sid)
    sid: Shippers[];

    @ManyToMany(type => Locations, location => location.lid)
    lid: Locations[];


}