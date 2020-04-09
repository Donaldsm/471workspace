import { getConnection } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { ClientResponse } from "http";

export class MerchantsController {
  private entityManager = getConnection().manager;

  async locations(request: Request, response: Response, next: NextFunction) {
    return await this.entityManager.query(`
    SELECT loc.lid, loc."streetNumber", loc."streetName", loc.city, loc."stateProvince", loc."postalZip" 
    FROM locations AS loc, merchants AS mer, merch_locations AS merloc
    WHERE loc.lid = merloc."locationsLid" AND mer.mid = merloc."merchLoactionId" AND mer.mid = ${request.params.mid};
    `);
  }
  async oneLocation(request: Request, response: ClientResponse, next: NextFunction){
    return await this.entityManager.query(`
    SELECT *
    FROM merchants AS M
      INNER JOIN merch_locations AS ML ON ML.mid = M.mid
      INNER JOIN locations AS L On L.lid = ML.lid
    WHERE M.mid = ${request.params.mid} AND L.lid = ${request.params.lid};
    `);
  }
}
