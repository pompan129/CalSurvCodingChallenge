"use strict";
module.exports = (sequelize, DataTypes) => {
  const Title = sequelize.define(
    "Title",
    {
      tconst: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      titletype: {
        type: DataTypes.STRING
      },
      primarytitle: {
        type: DataTypes.STRING
      },
      originaltitle: {
        type: DataTypes.STRING
      },
      isadult:{
        type: DataTypes.BOOLEAN
      },
      endyear: {
        type: DataTypes.INTEGER
      },
      endyear: {
        type: DataTypes.INTEGER
      },
      runtimeminutes:{
        type: DataTypes.INTEGER
      },
      genres:{
        type:DataTypes.STRING
      }
    },
    { tableName: "titles", schema: "userland", timestamps: false }
  );

  Title.associate = (models) => {
    Title.hasOne(models.Rating, {
      foreignKey: 'tconst',
      as: 'rating',
    });
  };

  return Title;
};
