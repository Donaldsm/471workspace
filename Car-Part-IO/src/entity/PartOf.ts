import { Entity, ManyToMany, JoinTable } from "typeorm";
import { Vehicles } from "./Vehicles";
import { Parts } from "./Parts";

@Entity()
export class PartOf {

    @ManyToMany(type => Vehicles, vehicles => vehicles.vin)
    vehicles: Vehicles[];

    @ManyToMany(type => Parts, parts => parts.partNumber)
    parts: Parts[];
}