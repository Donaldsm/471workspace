import { Entity, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Videos } from "./Videos";

@Entity()
export class Watches {

    @PrimaryGeneratedColumn()
    watchId: number;

    @ManyToMany(type => Users, users => users.id)
    @JoinTable()
    usersWatched: Users[];

    @ManyToMany(type => Videos, videos => videos.url)
    @JoinTable()
    videosWatched: Videos[];
}