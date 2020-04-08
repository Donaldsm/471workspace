import { getManager, getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";

export class User2Controller {

  private entityManager = getConnection().manager;

  async all(request: Request, response: Response, next: NextFunction) {
    return await this.entityManager.query(`SELECT * 
    FROM users
    `);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return await this.entityManager.query(`
    SELECT * 
    FROM users 
    WHERE id=${request.params.id}
    `);
  }
}
