import {getManager, getRepository, getConnection } from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Inventory} from "../entity/Inventory";
import {Locations} from "../entity/Locations";

export class InventoryController {
    private entityManager = getConnection().manager;

    async all(request: Request, resposne: Response, next: NextFunction) {
        return await this.entityManager.query(`SELECT * FROM inventory`);
    }

    async location(request: Request, response: Response, next: NextFunction) {
        return await this.entityManager.query(`
        SELECT *
        FROM inventory
        WHERE "locationLid" = ${request.params.locationLid}
        `);
    }

    async part(request: Request, response: Response, next: NextFunction) {
        return await this.entityManager.query(`
        SELECT *
        FROM inventory
        WHERE "partNumberPartNumber" = ${request.params.partNumberPartNumber}
        `)
    }

    async partLocation(request: Request, response: Response, next: NextFunction) {
        return await this. entityManager.query(`
        SELECT *
        FROM inventory
        WHERE "locationLid" = ${request.params.locationLid} AND
        "partNumberPartNumber" = ${request.params.partNumberPartNumber}
        `)
    }

    async updateQty(request: Request, response: Response, next: NextFunction) {
        return await this.entityManager.query(`
        UPDATE inventory
        SET qty = ${request.params.qty}
        WHERE "locationLid" = ${request.params.locationLid}
        AND "partNumberPartNumber = ${request.params.partNumberPartNumber}
        `)
    }
}