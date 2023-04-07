module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Usuario",
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.belongsTo(models.Rol, {
      as: "rol",
      foreignKey: "rolId",
    });
    Model.belongsToMany(models.Producto, {
      as: "productos",
      through: "carrito",
      foreignKey: "idUsuario",
      otherKey: "idProducto",
      timestamps: false,
    });
  };

  return Model;
};
