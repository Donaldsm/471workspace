import { Entity, Column, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Parts } from "./Parts";
import { Users } from "./Users";

@Entity()
export class PartsBought {

    @PrimaryGeneratedColumn()
    history_id: number;

    @ManyToMany(type => Parts, part => part.inventory)
    @JoinTable({
        name: "sold_by",
        joinColumn: {
            name: "history_id",
            referencedColumnName: "history_id"
        },
        inverseJoinColumn: {
            name: "part_number",
            referencedColumnName: "part_number"
        }
    })
    partNumber: Parts[];

    @ManyToOne(type => Users, users => users.id)
    order_num: Users;
}