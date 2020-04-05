import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Inventory } from "./Inventory";

@Entity()
export class Parts {
    @PrimaryGeneratedColumn()
    partNumber: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    category: string;

    @Column({nullable: true})
    type: string;

    // the relationship between parts and Inventory
    @ManyToMany(type => Inventory, inventory => inventory.partNumber, {
        cascade: true
    })
    @JoinTable()
    inventory: Parts[];
}