import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Manufacturers {

    @PrimaryGeneratedColumn()
    manuid: number;

    @Column()
    name: string;

    @Column()
    contact: string;
}