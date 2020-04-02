import { Entity, ManyToOne, ManyToMany, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Locations } from "./Locations";
import { Merchants } from "./Merchants";

@Entity()
export class MerchLocations {
    @PrimaryGeneratedColumn()
    merchLoactionId: number;

    @ManyToOne(type => Locations, locations => locations.lid)
    @JoinTable()
    locations: Locations[];

    @OneToMany(type => Merchants, merchants => merchants.mid)
    @JoinTable()
    merchant: Merchants;

}