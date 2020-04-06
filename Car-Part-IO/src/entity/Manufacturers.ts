import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable} from "typeorm";
import { type } from "os";
import {Merchants} from "./Merchants";
import {Parts} from "./Parts";

@Entity()
export class Manufacturers {

    @PrimaryGeneratedColumn()
    manu_id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    contact: string;

    @ManyToMany(type => Merchants, merchants => merchants.manuid)
    @JoinTable({
        name:"buys_from",
        joinColumn: {
            name: "manu_id",
            referencedColumnName: "manu_id"
        },
        inverseJoinColumn: {
            name: "mid",
            referencedColumnName: "mid"
        } 
    })
    mid: Merchants[];

    @ManyToMany(type => Parts, parts => parts.manufacturer)
    @JoinTable({
        name:"makes",
        joinColumn: {
            name: "manu_id",
            referencedColumnName: "manu_id"
        },
        inverseJoinColumn: {
            name: "part_number",
            referencedColumnName: "part_number"
        }
    })
    part: Parts[];
}