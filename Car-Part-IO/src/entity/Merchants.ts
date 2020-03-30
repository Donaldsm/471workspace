import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Merchants {

    @PrimaryGeneratedColumn()
    mid: number;

    @Column()
    name: string;

    @Column()
    website: string;

    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    storeURL: string;

    @Column()
    type: string;
}