import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Inventory } from "./Inventory";
import {Manufacturers} from "./Manufacturers";
import { Vehicles } from "./Vehicles";
import { PartsBought } from "./PartsBought";

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


    @ManyToMany(type => Manufacturers, manufacturers => manufacturers.part)
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
    
    @OneToMany(type => Inventory, inventory => inventory.part_number)
    inventory: Inventory[];

    @ManyToMany(type => Vehicles, vehicles => vehicles.parts)
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

    @OneToMany(type => PartsBought, partsBought => partsBought.part_Number)
    history: PartsBought[];

}