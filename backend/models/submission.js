"use strict";
module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define(
    "Submission",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      submittedAt: DataTypes.DATE,
      TD_status: DataTypes.STRING,
      TD_date: DataTypes.DATE,
      TAP_status: DataTypes.STRING,
      TAP_date: DataTypes.DATE,
      AB_status: DataTypes.STRING,
      AB_date: DataTypes.DATE,
      TA_status: DataTypes.STRING,
      TA_date: DataTypes.DATE,
      TXC_status: DataTypes.STRING,
      TXC_date: DataTypes.DATE,
      TX_status: DataTypes.STRING,
      TX_date: DataTypes.DATE,
      DF_status: DataTypes.STRING,
      DF_date: DataTypes.DATE,
    },
    {
      tableName: "Submissions",
    }
  );

  return Submission;
};