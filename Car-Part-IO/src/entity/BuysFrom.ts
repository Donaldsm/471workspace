import {Entity, ManyToMany, OneToMany, Column, JoinTable, Unique, PrimaryGeneratedColumn } from "typeorm";
import { Manufacturers } from "./Manufacturers";
import { Merchants } from "./Merchants";

@Entity()
export class BuysFrom {

    @PrimaryGeneratedColumn()
    buysFromId: number;

    @OneToMany(type => Manufacturers, manufacturers => manufacturers.manuid)
    @JoinTable()
    manuid: Manufacturers[];

    @OneToMany(type => Merchants, merchants => merchants.mid)
    @JoinTable()
    mid: Merchants[];

}