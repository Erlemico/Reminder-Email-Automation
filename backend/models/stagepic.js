"use strict";
module.exports = (sequelize, DataTypes) => {
  const StagePic = sequelize.define(
    "StagePic",
    {
      pic_name: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
      },
      stage_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      pic_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  return StagePic;
};