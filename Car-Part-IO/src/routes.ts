import {UserController} from "./controller/UserController";
import {PartsController} from "./controller/PartsController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
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
}];