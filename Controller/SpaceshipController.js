const Captain = require("../models/Captain");
const Spaceship = require("../models/Spaceship");

module.exports = {
	async store(req, res) {
		const { captainId } = req.params;
		const { name, capacity } = req.body;

		const captain = await Captain.findByPk(captainId);

		if (!captain) {
			res.send("Erro! Esse capitão não está cadastrado!");
		}

		const [spaceship] = await Spaceship.findOrCreate({
			where: {
				name,
				capacity,
			},
		});
		await captain.addSpaceship(spaceship);
		// return res.json(spaceship);
	},

	async index(req, res) {
		const { captainId } = req.params;

		const captain = await Captain.findByPk(captainId, {
			include: {
				association: "spaceships",
			},
		});

		return res.json(captain);
	},
};
