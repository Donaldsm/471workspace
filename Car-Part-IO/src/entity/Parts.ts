import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Inventory } from "./Inventory";

@Entity()
export class Parts {
    @PrimaryGeneratedColumn()
    partNumber: number;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    type: string;

    // the relationship between parts and Inventory
    @ManyToMany(type => Inventory, inventory => inventory.partNumber, {
        cascade: true
    })
    @JoinTable()
    inventory: Parts[];
}