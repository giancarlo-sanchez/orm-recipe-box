'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: DataTypes.INTEGER,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: {
      type: DataTypes.TEXT,
      validate: {
      notEmpty: true,
      },
    },
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    Ingredient.belongsTo(models.MeasurementUnit, { foreignKey: 'measurementUnitId' });
  };
  return Ingredient;
};
