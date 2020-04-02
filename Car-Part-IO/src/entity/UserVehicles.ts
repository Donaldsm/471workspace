import { Entity, OneToMany, ManyToOne, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Vehicles } from "./Vehicles";
import { Users } from "./Users";

@Entity()
export class UserVehicles {

    @PrimaryGeneratedColumn()
    ownerShipId: number;

    @ManyToOne(type => Vehicles, vehicles => vehicles.vin)
    @JoinTable()
    vehicles: Vehicles[];

    @OneToMany(type => Users, users => users.id)
    @JoinTable()
    owner: Users;
}