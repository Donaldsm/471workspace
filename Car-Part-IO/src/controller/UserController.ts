import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";

export class UserController {

  private entityManager = getConnection().manager;

  async all(request: Request, response: Response, next: NextFunction) {
    return await this.entityManager.query(`
    SELECT * FROM all_users();
    `);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return await this.entityManager.query(`
    SELECT * FROM one_users(${request.params.id});
    `);
  }

  async add(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    await this.entityManager.query(`
    SELECT add_one_users(${request.body.id},'${request.body.first_name}',
    '${request.body.last_name}','${request.body.email}');
    `);
    return ({
      "uri": `/users/${request.body.id}`
    });
  }
}
