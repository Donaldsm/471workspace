import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Inventory } from "./Inventory";
import { Merchants } from "./Merchants";
import { Shippers } from "./Shipppers";

@Entity()
export class Locations {

  @PrimaryGeneratedColumn()
  lid: number;

  // These should all be not-null columns, however
  // for the purposes of populating the database
  // we have chosen to let them be nullable
  @Column({ nullable: true })
  street_number: number;

  @Column({ nullable: true })
  street_name: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state_province: string;

  @Column({ nullable: true })
  postal_zip: string;

  @OneToMany(type => Inventory, inventory => inventory.location)
  inventory: Inventory[];

  @ManyToMany(type => Merchants, merchants => merchants.locations)
  @JoinTable({
    name: "merch_locations",
    joinColumn: {
      name: "lid",
      referencedColumnName: "lid"
    },
    inverseJoinColumn: {
      name: "mid",
      referencedColumnName: "mid"
    }
  })
  merchants: Merchants[];

  @ManyToMany(type => Shippers, shipper => shipper.pickups)
  @JoinTable({
    name: "ships_from",
    joinColumn: {
      name: "lid",
      referencedColumnName: "lid"
    },
    inverseJoinColumn: {
      name: "sid",
      referencedColumnName: "sid"
    }
  })
  sid: Shippers[];
}
