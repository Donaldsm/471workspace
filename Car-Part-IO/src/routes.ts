import {UserController} from "./controller/UserController";
import {PartsController} from "./controller/PartsController";
import {User2Controller} from "./controller/User2Controller";
import {InventoryController} from "./controller/InventoryController";
import {ShippersController} from "./controller/ShippersController";
import { LocationsController } from "./controller/LocationsController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: User2Controller,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: User2Controller,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},{
    method: "get",
    route:"/parts",
    controller: PartsController,
    action: "all"
},{
    method: "get",
    route: "/parts/:id",
    controller: PartsController,
    action: "one"
},{
    method: "post",
    route: "/parts",
    controller: PartsController,
    action: "save"
},{
    method: "get",
    route: "/inventory",
    controller: InventoryController,
    action: "all"
},{
    method: "get",
    route: "/inventory/:locationLid",
    controller: InventoryController,
    action: "location"
},{
    method: "get",
    route: "/inventory/parts/:partNumberPartNumber",
    controller: InventoryController,
    action: "part"
},{
    method: "get",
    route: "/inventory/:locationLid/:partNumberPartNumber",
    controller: InventoryController,
    action: "partLocation"
},{
    method: "get",
    route: "/shippers",
    controller: ShippersController,
    action: "allShippers"
},{
    method: "get",
    route: "/locations",
    controller: LocationsController,
    action: "getAll"
},{
    method: "get",
    route: "/locations/:lid",
    controller: LocationsController,
    action: "getOne"
}];