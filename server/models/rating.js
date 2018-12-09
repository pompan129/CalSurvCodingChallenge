"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    "Rating",
    {
      tconst: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      averagerating: {
        type: DataTypes.DECIMAL
      },
      numvotes: {
        type: DataTypes.INTEGER
      }
    },
    { tableName: "ratings", schema: "userland", timestamps: false }
  );

  return Rating;
};
