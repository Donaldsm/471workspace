import { Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Vehicles } from "./Vehicles";
import { Parts } from "./Parts";

@Entity()
export class PartOf {

    @PrimaryGeneratedColumn()
    isPartOfId: number;

    @ManyToMany(type => Vehicles, vehicles => vehicles.vin)
    @JoinTable()
    vehicles: Vehicles[];

    @ManyToMany(type => Parts, parts => parts.partNumber)
    @JoinTable()
    parts: Parts[];
}