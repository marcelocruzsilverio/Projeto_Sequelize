const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");
const SateliteController = require("../Controller/SateliteController");
const CaptainController = require("../Controller/CaptainController");
const SpaceshipController = require("../Controller/SpaceshipController");

routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

routes.post("/captain", CaptainController.store);
routes.get("/captain", CaptainController.index);

routes.post("/captains/:captainId/spaceships", SpaceshipController.store);
routes.get("/captains/:captainId/spaceships", SpaceshipController.index);

module.exports = routes;
