module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Marca",
    {
      marca: DataTypes.STRING,
    },
    {
      tableName: "marca",
      timestamps: false,
    }
  );
};
