import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({nullable: true})
    dob: string;

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    streetNumber: number;

    @Column({nullable: true})
    streetName: string;

    @Column({nullable: true})
    stateProvince: string;

    @Column({nullable: true})
    postalZip: string;

}
