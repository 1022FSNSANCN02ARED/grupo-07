module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Rol",
    {
      rol: DataTypes.STRING,
    },
    {
      tableName: "usuario",
      timestamps: false,
    }
  );

  return Model;
};
