module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Gama",
    {
      gama: DataTypes.STRING,
    },
    {
      tableName: "gama",
      timetamps: false,
    }
  );
  return Model;
};
