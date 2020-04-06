import {Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import { Parts } from "./Parts";
import { Users } from "./Users";

@Entity()
export class Vehicles {
    @PrimaryGeneratedColumn()
    vin: number;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column({nullable:true})
    colour: string;

    @Column({nullable:true})
    trim: string;

    @ManyToMany(type => Parts, parts => parts.part_number)
    @JoinTable({
        name: "part_of",
        joinColumn: {
            name: "vin",
            referencedColumnName: "vin"
        },
        inverseJoinColumn: {
            name: "part_number",
            referencedColumnName: "part_number"
        }
    })
    parts: Parts[];

    @ManyToOne(type => Users, users => users.vehicles)
    owner: Users;
}