import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Parts } from "../entity/Parts";
import { ClientResponse } from "http";

export class PartsController {
  private partsRepository = getRepository(Parts);
  private entityManager = getConnection().manager;

  async all(request: Request, response: Response, next: NextFunction) {
    return this.entityManager.query(`
        SELECT * FROM all_parts();
        `);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.entityManager.query(`
        SELECT * FROM one_part(${request.params.id})
        `);
  }

  async add(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    await this.entityManager.query(`
    SELECT add_part(${request.body.part_number}, '${request.body.name}', '${request.body.description}',
    '${request.body.category}', '${request.body.type}')
    `);
    return ({
        "uri": `/api/v1.0/parts/${request.body.part_number}`
    });
  }

  async remove(request: Request, response: ClientResponse, next: NextFunction) {
    let partToRemove = await this.partsRepository.findOne(request.params.id);
    await this.partsRepository.remove(partToRemove);
  }
}




