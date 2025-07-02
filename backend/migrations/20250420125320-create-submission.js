"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Submissions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      title: Sequelize.STRING,
      submittedAt: Sequelize.DATE,
      TD_status: Sequelize.STRING,
      TD_date: Sequelize.DATE,
      TAP_status: Sequelize.STRING,
      TAP_date: Sequelize.DATE,
      AB_status: Sequelize.STRING,
      AB_date: Sequelize.DATE,
      TA_status: Sequelize.STRING,
      TA_date: Sequelize.DATE,
      TXC_status: Sequelize.STRING,
      TXC_date: Sequelize.DATE,
      TX_status: Sequelize.STRING,
      TX_date: Sequelize.DATE,
      DF_status: Sequelize.STRING,
      DF_date: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Submissions");
  },
};