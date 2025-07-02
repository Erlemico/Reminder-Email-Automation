"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert("StagePics", [
      {
        pic_name: "Kaneki Ken",
        gender: "male",
        stage_name: "TD",
        pic_email: "kanekiken24727@gmail.com",
        createdAt: now,
        updatedAt: now,
      },
      {
        pic_name: "Kayaba Akihiko",
        gender: "male",
        stage_name: "TAP",
        pic_email: "kayabaakihiko24727@gmail.com",
        createdAt: now,
        updatedAt: now,
      },
      {
        pic_name: "John Doe",
        gender: "male",
        stage_name: "AB",
        pic_email: "johndoe@example.com",
        createdAt: now,
        updatedAt: now,
      },
      {
        pic_name: "Sophie Williams",
        gender: "female",
        stage_name: "TA",
        pic_email: "sophiewilliams@example.com",
        createdAt: now,
        updatedAt: now,
      },
      {
        pic_name: "Michael Brown",
        gender: "male",
        stage_name: "TXC",
        pic_email: "michaelbrown@example.com",
        createdAt: now,
        updatedAt: now,
      },
      {
        pic_name: "James Anderson",
        gender: "male",
        stage_name: "TX",
        pic_email: "jamesanderson@example.com",
        createdAt: now,
        updatedAt: now,
      },
      {
        pic_name: "Emily Johnson",
        gender: "female",
        stage_name: "DF",
        pic_email: "emilyjohnson@example.com",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("StagePics", null, {});
  },
};