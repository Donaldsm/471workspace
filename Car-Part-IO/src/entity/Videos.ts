import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Parts } from "./Parts";
import { Users } from "./Users";

@Entity()
export class Videos {

  @PrimaryColumn()
  url: string;

  @Column()
  duration: number;

  @OneToOne(type => Parts, parts => parts.part_number)
  @JoinColumn()
  part: Parts;

  @ManyToMany(type => Users)
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
