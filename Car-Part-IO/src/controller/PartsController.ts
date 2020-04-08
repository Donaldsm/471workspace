import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Parts } from "../entity/Parts";
import { ClientResponse } from "http";

export class PartsController {
  private partsRepository = getRepository(Parts);
  private entityManager = getConnection().manager;

  async all(request: Request, response: Response, next: NextFunction) {
    return this.entityManager.query(`
        SELECT *
        FROM parts
        `);
  }

  async one(request: Request, response: ClientResponse, next: NextFunction) {
    return this.entityManager.query(`
        SELECT *
        FROM parts
        WHERE "part_number" = ${request.params.id}
        `);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    return await this.entityManager.query(`
        INSERT INTO parts (name, description, category, type)
        VALUES ('${JSON.stringify(request.body.name)}', '${JSON.stringify(request.body.description)}', '${JSON.stringify(request.body.category)}', '${JSON.stringify(request.body.type)}');
        `);
  }

  async remove(request: Request, response: ClientResponse, next: NextFunction) {
    let partToRemove = await this.partsRepository.findOne(request.params.id);
    await this.partsRepository.remove(partToRemove);
  }
}
