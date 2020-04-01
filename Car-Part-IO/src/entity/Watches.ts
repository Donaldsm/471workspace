import { Entity, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Users } from "./Users";
import { Videos } from "./Videos";

@Entity()
export class Watches {

    @ManyToMany(type => Users, users => users.id)
    usersWatched: Users[];

    @ManyToMany(type => Videos, videos => videos.url)
    videosWatched: Videos[];
}