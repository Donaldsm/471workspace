import {Entity, ManyToMany, JoinTable} from "typeorm";
import { Manufacturers } from "./Manufacturers";
import { Merchants } from "./Merchants";

@Entity()
export class BuysFrom {
    @ManyToMany(type => Manufacturers, manufacturer => manufacturer.manuid)
    manuid: Manufacturers[];

    @ManyToMany(type => Merchants, merchant => merchant.mid)
    mid: Merchants[];
}