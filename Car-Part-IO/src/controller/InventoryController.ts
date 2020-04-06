import {getManager, getRepository, getConnection } from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Inventory} from "../entity/Inventory";
import {Locations} from "../entity/Locations";
import { ClientResponse } from "http";

export class InventoryController {
    private entityManager = getConnection().manager;

    async all(request: Request, resposne: Response, next: NextFunction) {
        return await this.entityManager.query(`SELECT * FROM inventory`);
    }

    async one(request: Request, response: ClientResponse, next: NextFunction) {
        return await this.entityManager.query(``);
    }
}