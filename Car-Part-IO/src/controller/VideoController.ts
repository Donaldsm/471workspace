import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";

export class VideoController {
    private entityManager = getConnection().manager;
    
    async add(request: Request, response: Response, next: NextFunction) {
        console.log(request.body);
        await this.entityManager.query(`
        SELECT add_video('${request.body.url}',${request.body.duration}, ${request.params.partPartNumber});
        `);
        return ({
            "uri" : `/api/v1.0/parts/${request.params.partPartNumber}/videos/${request.body.url}`
        })
    }

    async getVideo(request: Request, response: Response, next: NextFunction){
        return await this.entityManager.query(`
        SELECT * FROM find_video(${request.params.partPartNumber});
        `)
    }
}