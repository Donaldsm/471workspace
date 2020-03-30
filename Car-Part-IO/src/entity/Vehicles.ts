import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

    @Column()
    colour: string;

    @Column()
    trim: string;
}