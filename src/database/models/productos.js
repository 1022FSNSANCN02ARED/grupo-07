module.exports = (sequelize, DataTypes) => {
  let alias = "Producto";
  let cols = {
      id: {
          type: DataTypes.INTEGER(50),
          primaryKey: true,
          autoIncrement: true,
      },
      nombre: {
          type: DataTypes.STRING(100),
      },
      precio: {
          type: DataTypes.INTEGER(100),
      },
      descripcion: {
          type: DataTypes.STRING(500),
      },
      marcaId: {
          type: DataTypes.INTEGER(100),
      },
      gamaId: {
          type: DataTypes.INTEGER(100),
      },
      imagen: {
          type: DataTypes.STRING(45),
      },
      sockets: {
          type: DataTypes.STRING(5),
      },
      slots: {
          type: DataTypes.INTEGER(11),
      },
      ram: {
          type: DataTypes.STRING(4),
      },
  };
  let config = { tableName: "productos", timestamps: false };

  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
      Producto.belongsTo(models.Marca);
      Producto.belongsTo(models.Gama);
  Producto.belongsToMany(models.Usuario, {
    through: "carrito",
    sourceKey: "id",
    timestamps: false,
  });
  };

  return Producto;
};