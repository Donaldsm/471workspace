import { getConnection } from "typeorm";
import { Request, Response, NextFunction } from "express";

export class ShippersController {

  private entityManager = getConnection().manager;

  async allShippers(request: Request, response: Response, next: NextFunction) {
    return await this.entityManager.query(`
        SELECT * FROM all_shippers();
        `)
  }
}
