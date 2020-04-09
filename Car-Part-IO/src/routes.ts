import { UserController } from "./controller/UserController";
import { PartsController } from "./controller/PartsController";
import { User2Controller } from "./controller/User2Controller";
import { InventoryController } from "./controller/InventoryController";
import { ShippersController } from "./controller/ShippersController";
import { LocationsController } from "./controller/LocationsController";
import { MerchantsController } from "./controller/MerchantsController";

export const Routes = [{
    method: "get",
    route: "/api/v1.0/users",
    controller: User2Controller,
    action: "all"
}, {
    method: "get",
    route: "/api/v1.0/users/:id",
    controller: User2Controller,
    action: "one"
}, {
    method: "post",
    route: "/api/v1.0/users",
    controller: User2Controller,
    action: "add"
}, {
    method: "delete",
    route: "/api/v1.0/users/:id",
    controller: UserController,
    action: "remove"
},{
    method: "get",
    route:"/api/v1.0/parts",
    controller: PartsController,
    action: "all"
},{
    method: "get",
    route: "/api/v1.0/parts/:id",
    controller: PartsController,
    action: "one"
},{
    method: "post",
    route: "/api/v1.0/parts",
    controller: PartsController,
    action: "add"
},{
    method: "get",
    route: "/api/v1.0/inventory",
    controller: InventoryController,
    action: "all"
},{
    method: "get",
    route: "/api/v1.0/inventory/:locationLid",
    controller: InventoryController,
    action: "location"
},{
    method: "get",
    route: "/api/v1.0/inventory/parts/:partNumberPartNumber",
    controller: InventoryController,
    action: "part"
},{
    method: "get",
    route: "/api/v1.0/inventory/:locationLid/:partNumberPartNumber",
    controller: InventoryController,
    action: "partLocation"
},{
    method:"put",
    route: "/api/v1.0/inventory",
    controller: InventoryController,
    action: "updateQty"
},{
    method: "get",
    route: "/api/v1.0/shippers",
    controller: ShippersController,
    action: "allShippers"
},{
    method: "get",
    route: "/api/v1.0/locations",
    controller: LocationsController,
    action: "getAll"
},{
    method: "get",
    route: "/api/v1.0/locations/:lid",
    controller: LocationsController,
    action: "getOne"
},{
    method: "get",
    route: "/api/v1.0/merchants/:mid/locations/:lid",
    controller: MerchantsController,
    action: "oneLocation"
},{
    method: "post",
    route: "/api/v1.0/merchants/:mid/locations",
    controller: LocationsController,
    action: "add"
}];