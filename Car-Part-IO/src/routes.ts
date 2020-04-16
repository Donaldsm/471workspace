import { PartsController } from "./controller/PartsController";
import { UserController } from "./controller/UserController";
import { InventoryController } from "./controller/InventoryController";
import { ShippersController } from "./controller/ShippersController";
import { LocationsController } from "./controller/LocationsController";
import { MerchantsController } from "./controller/MerchantsController";
import { VideoController } from "./controller/VideoController";

export const Routes = [{
  method: "get",
  route: "/api/v1.0/users",
  controller: UserController,
  action: "all"
}, {
  method: "get",
  route: "/api/v1.0/users/:id",
  controller: UserController,
  action: "one"
}, {
  method: "post",
  route: "/api/v1.0/users",
  controller: UserController,
  action: "add"
}, {
  method: "get",
  route: "/api/v1.0/parts",
  controller: PartsController,
  action: "all"
}, {
  method: "get",
  route: "/api/v1.0/parts/:id",
  controller: PartsController,
  action: "one"
}, {
  method: "post",
  route: "/api/v1.0/parts",
  controller: PartsController,
  action: "add"
}, {
  method: "get",
  route: "/api/v1.0/inventory",
  controller: InventoryController,
  action: "all"
}, {
  method: "get",
  route: "/api/v1.0/inventory/:locationLid",
  controller: InventoryController,
  action: "location"
}, {
  method: "get",
  route: "/api/v1.0/inventory/parts/:partNumberPartNumber",
  controller: InventoryController,
  action: "part"
}, {
  method: "get",
  route: "/api/v1.0/inventory/:locationLid/:partNumberPartNumber",
  controller: InventoryController,
  action: "partLocation"
}, {
  method: "put",
  route: "/api/v1.0/inventory",
  controller: InventoryController,
  action: "updateQty"
}, {
  method: "get",
  route: "/api/v1.0/shippers",
  controller: ShippersController,
  action: "allShippers"
}, {
  method: "get",
  route: "/api/v1.0/locations",
  controller: LocationsController,
  action: "getAll"
}, {
  method: "get",
  route: "/api/v1.0/locations/:lid",
  controller: LocationsController,
  action: "getOne"
}, {
  method: "get",
  route: "/api/v1.0/merchants/:mid/locations/:lid",
  controller: MerchantsController,
  action: "oneLocation"
}, {
  method: "post",
  route: "/api/v1.0/merchants/:mid/locations",
  controller: LocationsController,
  action: "add"
}, {
  method: "get",
  route: "/api/v1.0/videos/parts/:partPartNumber",
  controller: VideoController,
  action: "getVideo"
}, {
  method: "post",
  route: "/api/v1.0/parts/:partPartNumber/videos",
  controller: VideoController,
  action: "add"
}
  // TODO: Add endpoint to add a part to an inventory

  // TODO: Add endpoint allowing a user to add a vehicle to their account.
];
