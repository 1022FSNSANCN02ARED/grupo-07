module.exports = (sequelize, DataTypes) => {
  const alias = "Gama";
  let cols = {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    gama: {
      type: DataTypes.STRING(100),
    },
  };

  let config = { tableName: "gama", timestamps: false };
  const Gama = sequelize.define(alias, cols, config);

  Gama.associate = function (models) {
    Gama.hasMany(models.Producto, {
      sourceKey: "id",
      targetKey: "gamaId",
    });
  };
  return Gama;
};
