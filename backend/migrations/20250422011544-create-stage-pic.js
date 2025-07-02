"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("StagePics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pic_name: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
        allowNull: false,
      },
      stage_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      pic_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("StagePics");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_StagePics_gender";'
    );
  },
};