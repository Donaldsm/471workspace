import "reflect-metadata";

import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";

import { Routes } from "./routes";
import { Users } from "./entity/Users";
import { Parts } from "./entity/Parts";
import { Inventory } from "./entity/Inventory";
import { Locations } from "./entity/Locations";

createConnection().then(async connection => {

  // Create express app
  const app = express();

  app.use(bodyParser.json());

  // Register express routes from defined application routes
  Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    });
  });

  // Start listening on port 3000
  app.listen(3000);

  // Test inserts just to add some data into the database.
  // You can use this if you want, but it's not necessary.
  /*
  await connection.manager.save(connection.manager.create(Users, {
    first_name: "Timber",
    last_name: "Saw"
  }));
  await connection.manager.save(connection.manager.create(Users, {
    first_name: "Phantom",
    last_name: "Assassin"
  }));
  await connection.manager.save(connection.manager.create(Parts, {
    name: "ECM"
  }));
  await connection.manager.save(connection.manager.create(Locations, {
    street_number: 1234,
    street_name: "hello"
  }))
  await connection.manager.save(connection.manager.create(Locations, {
    street_number: Math.floor(Math.random() * 100),
    street_name: Math.floor(Math.random() * 100) + "th ave",
    city: "Calgary"
  }))
  await connection.manager.save(connection.manager.create(Locations, {
    street_number: Math.floor(Math.random() * 100),
    street_name: Math.floor(Math.random() * 100) + "th ave",
    city: "Vancouver",
  }))
  */

  console.log("Express server has started on port 3000...");

}).catch(error => console.log(error));
