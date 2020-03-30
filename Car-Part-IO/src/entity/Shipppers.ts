import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Shippers {

    @PrimaryGeneratedColumn()
    sid: number;

    @Column()
    name: string;

    @Column()
    contact: string;

}