import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import { type } from "os";

@Entity()
export class Manufacturers {

    @PrimaryGeneratedColumn()
    manuid: number;

    @Column()
    name: string;

    @Column()
    contact: string;
}