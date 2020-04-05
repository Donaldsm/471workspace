import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Inventory } from "./Inventory";
import {Manufacturers} from "./Manufacturers";
import { Vehicles } from "./Vehicles";

@Entity()
export class Parts {
    @PrimaryGeneratedColumn()
    part_number: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    category: string;

    @Column({nullable: true})
    type: string;


    @ManyToMany(type => Manufacturers, manufacturers => manufacturers.manu_id)
    @JoinTable({
        name: "makes",
        joinColumn: {
            name: "part_number",
            referencedColumnName: "part_number"
        },
        inverseJoinColumn: {
            name: "manu_id",
            referencedColumnName: "manu_id"
        }
    })
    manufacturer: Manufacturers[];
    
    @ManyToMany(type => Inventory, inventory => inventory.inventory_id)
    @JoinTable({
        name: "soldby",
        joinColumn: {
            name: "part_number",
            referencedColumnName: "part_number"
        },
        inverseJoinColumn: {
            name: "inventory_id",
            referencedColumnName: "inventory_id"
        }
    })
    inventory: Inventory[];

    @ManyToMany(type => Vehicles, vehicles => vehicles.vin)
    @JoinTable({
        name: "part_of",
        joinColumn: {
            name:"part_number",
            referencedColumnName: "part_number"
        },
        inverseJoinColumn: {
            name: "vin",
            referencedColumnName: "vin"
        }
    })
    vehicles: Vehicles[];

}