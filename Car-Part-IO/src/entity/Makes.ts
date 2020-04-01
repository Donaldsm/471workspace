import { Entity, ManyToMany, JoinTable } from "typeorm";
import { Manufacturers } from "./Manufacturers";
import { type } from "os";
import { Parts } from "./Parts";

@Entity()
export class Makes {
    @ManyToMany(type => Manufacturers, manufacturers => manufacturers.manuid)
    manufacturer: Manufacturers[];

    @ManyToMany(type => Parts, parts => parts.partNumber)
    part: Parts[];
}