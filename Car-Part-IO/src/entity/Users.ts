import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { PartsBought } from "./PartsBought";
import { Vehicles } from "./Vehicles";
import { Videos } from "./Videos";
import { PurchaseOrders } from "./PurchaseOrders";


@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  dob: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  street_number: number;

  @Column({ nullable: true })
  street_name: string;

  @Column({ nullable: true })
  state_province: string;

  @Column({ nullable: true })
  postal_zip: string;

  @OneToMany(type => PartsBought, partsbought => partsbought.order_num)
  purchase_history: PartsBought[];

  @OneToMany(type => PurchaseOrders, purchaseOrders => purchaseOrders.user)
  purchase_orders: PurchaseOrders[];

  @OneToMany(type => Vehicles, vehicles => vehicles.owner)
  vehicles: Vehicles[];

  @ManyToMany(type => Videos, videos => videos.url)
  @JoinTable({
    name: "Watches",
    joinColumn: {
      name: "user_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "video",
      referencedColumnName: "url"
    }
  })
  videosWatched: Videos[];
}
