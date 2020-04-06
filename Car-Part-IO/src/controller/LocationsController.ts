import {getManager, getRepository, getConnection } from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Locations } from "../entity/Locations";

export class LocationsController {

    private entityManager = getConnection().manager;
    private locationsRepository = getRepository(Locations)

    async save(request: Request, response: Response, next: NextFunction){
        return this.locationsRepository.save(request.body);
    }
}