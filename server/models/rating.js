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

  Rating.associate = (models) => {
    Rating.belongsTo(models.Title, {
      foreignKey: 'tconst',
    });
  };

  return Rating;
};
