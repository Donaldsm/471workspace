import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Parts } from "../entity/Parts";
import { ClientResponse } from "http";

export class PartsController {
    private partsRepository = getRepository(Parts);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.partsRepository.find();
    }

    async one(request: Request, response: ClientResponse, next: NextFunction) {
        return this.partsRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction){
        return this.partsRepository.save(request.body);
    }

    async remove(request: Request, response: ClientResponse, next: NextFunction) {
        let partToRemove = await this.partsRepository.findOne(request.params.id);
        await this.partsRepository.remove(partToRemove);
    }
}