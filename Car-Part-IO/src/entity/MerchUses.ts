import { Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Merchants } from "./Merchants";
import { MerchLocations } from "./MerchLocations";
import { Shippers } from "./Shipppers";

@Entity()
export class MerchUses {

    @PrimaryGeneratedColumn()
    clientId: number;

    @ManyToMany(type => Merchants, merchants => merchants.mid)
    @JoinTable()
    merchants: Merchants[];

    @ManyToMany(type => Shippers, shippers => shippers.sid)
    @JoinTable()
    shippers: Shippers[];
}