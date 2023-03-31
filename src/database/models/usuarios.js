module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Usuario",
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      correo: DataTypes.STRING,
      avatar: DataTypes.STRING,
      contraseña: DataTypes.INTEGER,
    },
    {
      tableName: "usuario",
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.belongsTo(models.Rol, {
      as: "rol",
      foreignKey: "idRol",
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
