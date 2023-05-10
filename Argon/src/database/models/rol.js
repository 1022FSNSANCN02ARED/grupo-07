module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Rol",
    {
      rol: DataTypes.STRING,
    },
    {
      tableName: "rol",
      timestamps: false,
    }
  );

  return Model;
};
