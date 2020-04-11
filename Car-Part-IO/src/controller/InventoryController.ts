import {getManager, getRepository, getConnection } from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Inventory} from "../entity/Inventory";
import {Locations} from "../entity/Locations";

export class InventoryController {
    private entityManager = getConnection().manager;

    async all(request: Request, resposne: Response, next: NextFunction) {
        return await this.entityManager.query(`
        SELECT * FROM all_inventorys();
        `);
    }

    async location(request: Request, response: Response, next: NextFunction) {
        return await this.entityManager.query(`
        SELECT * FROM location_inventory(${request.params.locationLid});
        `);
    }

    async part(request: Request, response: Response, next: NextFunction) {
        return await this.entityManager.query(`
        SELECT * FROM part_search_inventorys(${request.params.partNumberPartNumber});
        `)
    }

    async partLocation(request: Request, response: Response, next: NextFunction) {
        return await this. entityManager.query(`
        SELECT * FROM part_location_search_inventorys(${request.params.locationLid},
            ${request.params.partNumberPartNumber});
        `)
    }

    async updateQty(request: Request, response: Response, next: NextFunction) {
        console.log(request.body)
        await this.entityManager.query(`
        SELECT update_qty(${request.body.locationLid},${request.body.partNumberPartNumber},
            ${request.body.qty});
        `)
        return ({
            "uri" : `/api/v1.0/inventory/${request.body.locationLid}/${request.body.partNumberPartNumber}`
        })
    }
}