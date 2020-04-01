import { Entity, ManyToMany, JoinTable } from "typeorm";
import { Merchants } from "./Merchants";
import { MerchLocations } from "./MerchLocations";
import { Shippers } from "./Shipppers";

@Entity()
export class MerchUses {

    @ManyToMany(type => Merchants, merchants => merchants.mid)
    merchants: Merchants[];

    @ManyToMany(type => Shippers, shippers => shippers.sid)
    shippers: Shippers[];
}