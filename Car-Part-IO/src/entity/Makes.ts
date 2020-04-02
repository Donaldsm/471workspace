import { Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Manufacturers } from "./Manufacturers";
import { type } from "os";
import { Parts } from "./Parts";

@Entity()
export class Makes {
    @PrimaryGeneratedColumn()
    makerId: number;

    @ManyToMany(type => Manufacturers, manufacturers => manufacturers.manuid)
    @JoinTable()
    manufacturer: Manufacturers[];

    @ManyToMany(type => Parts, parts => parts.partNumber)
    @JoinTable()
    part: Parts[];
}