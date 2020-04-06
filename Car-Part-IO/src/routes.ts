import {UserController} from "./controller/UserController";
import {PartsController} from "./controller/PartsController";
import {User2Controller} from "./controller/User2Controller";
import {InventoryController} from "./controller/InventoryController";

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
}];