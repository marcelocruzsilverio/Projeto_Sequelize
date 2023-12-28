"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("captain_spaceship", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},

			captainId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "captains", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},

			spaceshipId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "spaceships", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
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
		await queryInterface.dropTable("captain_spaceship");
	},
};
