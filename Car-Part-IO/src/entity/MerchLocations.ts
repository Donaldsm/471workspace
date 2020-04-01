import { Entity, ManyToOne, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Locations } from "./Locations";
import { Merchants } from "./Merchants";

@Entity()
export class MerchLocations {

    @ManyToOne(type => Locations, locations => locations.lid)
    locations: Locations[];

    @OneToMany(type => Merchants, merchants => merchants.mid)
    merchant: Merchants;

}