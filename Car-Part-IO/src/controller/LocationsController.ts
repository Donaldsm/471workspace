import { getManager, getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Locations } from "../entity/Locations";
import { ClientResponse } from "http";

export class LocationsController {

    private entityManager = getConnection().manager;
    private locationsRepository = getRepository(Locations)

    async save(request: Request, response: Response, next: NextFunction){
        return this.locationsRepository.save(request.body);
    }

    async getAll(request: Request, response: Response, next: NextFunction){
        return await this.entityManager.query(`
        SELECT * FROM all_locations();
        `)
    }

    async getOne(request: Request, response: Response, next: NextFunction){
        return await this.entityManager.query(`
        SELECT * one_location_no_merchant(${request.params.lid});
        `)
    }

    async add(request: Request, response: Response, next: NextFunction){
        console.log(request.body);
        await this.entityManager.query(`
        SELECT add_location(${request.body.lid},'${request.body.street_number}','${request.body.street_name}',
        '${request.body.city}','${request.body.postal_zip}',${request.params.mid});
        `)
        return ({
            "uri": `/api/v1.0/merchants/${request.params.mid}/locations/${request.body.lid}`
        });
    }
}