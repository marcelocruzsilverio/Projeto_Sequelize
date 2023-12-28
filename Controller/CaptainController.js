const Captain = require("../models/Captain");

module.exports = {
	async store(req, res) {
		const { name, fromPlanet } = req.body;

		const captain = await Captain.create({ name, fromPlanet });
		return res.json(captain);
	},

	async index(req, res) {
		const captain = await Captain.findAll();
		return res.json(captain);
	},
};
