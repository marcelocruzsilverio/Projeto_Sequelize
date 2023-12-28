const Spaceship = require("../models/Spaceship");
const Captain = require("../models/Captain");
const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");

Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreignKey: "planetId", as: "planet" });

Captain.belongsToMany(Spaceship, {
	foreignKey: "captainId",
	through: "captain_spaceship",
	as: "spaceships",
});

Spaceship.belongsToMany(Captain, {
	foreignKey: "spaceshipId",
	through: "captain_spaceship",
	as: "captains",
});

module.exports = { Planet, Satelite };
