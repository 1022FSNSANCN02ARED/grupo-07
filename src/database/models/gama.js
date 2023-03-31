module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Gama",
    {
      gama: DataTypes.STRING,
    },
    {
      tableName: "usuario",
      timestamps: false,
    }
  );
};

return Model;
