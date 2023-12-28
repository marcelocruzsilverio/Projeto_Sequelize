"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("captains", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},

			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},

			fromPlanet: {
				type: Sequelize.STRING,
				allowNull: false,
			},

			createdAt: {
				type: Sequelize.DATE,
			},

			updatedAt: {
				type: Sequelize.DATE,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("captains");
	},
};
