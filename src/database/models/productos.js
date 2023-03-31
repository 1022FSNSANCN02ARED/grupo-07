module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Producto",
    {
      nombre: DataTypes.STRING,
      precio: DataTypes.DECIMAL,
      imagen: DataTypes.STRING,
      stock: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      tableName: "productos",
      timestamps: false,
    }
  );
  Model.associate = (models) => {
    Model.belongsTo(models.Gama, {
      as: "gama",
      foreignKey: "idGama",
    });
    Model.belongsTo(models.Marca, {
      as: "marca",
      foreignKey: "idMarca",
      timestamps: false,
    });
    Model.belongsToMany(models.Usuario, {
      as: "usuario",
      through: "carrito",
      foreignKey: "idUsuario",
      otherKey: "idProducto",
      timestamps: false,
    });
  };

  return Model;
};
