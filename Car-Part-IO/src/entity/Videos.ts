import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Videos {
    
    @PrimaryGeneratedColumn()
    url: string;

    @Column()
    duration: number;
}