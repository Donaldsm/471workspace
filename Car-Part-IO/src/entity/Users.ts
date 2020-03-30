import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    dob: string;

    @Column()
    email: string;

    @Column()
    streetNumber: number;

    @Column()
    streetName: string;

    @Column()
    stateProvince: string;

    @Column()
    postalZip: string;

}
