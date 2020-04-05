import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { Parts } from "./Parts";
import { Users } from "./Users";

@Entity()
export class Videos {
    
    @PrimaryGeneratedColumn()
    url: string;

    @Column()
    duration: number;

    @OneToOne(type => Parts, parts => parts.part_number)
    @JoinColumn()
    part_num: Parts;

    @ManyToMany(type => Users, users => users.id)
    @JoinTable({
        name: "watches",
        joinColumn: {
            name: "url",
            referencedColumnName: "url"
        },
        inverseJoinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        }
    })
    usersWatched: Users[];
}