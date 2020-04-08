import {getManager, getRepository, getConnection } from "typeorm";
import {NextFunction, Request, Response} from "express";
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
        SELECT *
        FROM locations
        `)
    }

    async getOne(request: Request, response: Response, next: NextFunction){
        return await this.entityManager.query(`
        SELECT *
        FROM locations
        WHERE "lid" = ${request.params.lid}
        `)
    }
}