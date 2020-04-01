import { Entity, OneToOne } from "typeorm";
import { type } from "os";
import { Videos } from "./Videos";
import { Parts } from "./Parts";

@Entity()
export class VideoParts {
    @OneToOne(type => Videos, video => video.url)
    url: Videos;

    @OneToOne(type => Parts, parts => parts.partNumber)
    partNum: Parts;
}