const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Captain = sequelize.define("captains", {
	name: DataTypes.STRING,
	fromPlanet: DataTypes.STRING,
});

module.exports = Captain;
