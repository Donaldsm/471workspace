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

  async add(request: Request, response: Response, next: NextFunction){
    console.log(request.body);
    await this.entityManager.query(`
      INSERT INTO users (id, first_name, last_name, email)
      VALUES ('${request.body.id}','${request.body.first_name}',
      '${request.body.last_name}','${request.body.email}');
    `);
    return ({
      "uri": `/users/${request.body.id}`
    });
  }
}
