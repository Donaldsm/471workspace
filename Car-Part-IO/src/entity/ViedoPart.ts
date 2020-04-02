import { Entity, OneToOne, PrimaryGeneratedColumn, JoinTable } from "typeorm";
import { type } from "os";
import { Videos } from "./Videos";
import { Parts } from "./Parts";

@Entity()
export class VideoPart {
    @PrimaryGeneratedColumn()
    partToVidId: number;

    @OneToOne(type => Videos, video => video.url)
    @JoinTable()
    url: Videos;

    @OneToOne(type => Parts, parts => parts.partNumber)
    @JoinTable()
    partNum: Parts;
}