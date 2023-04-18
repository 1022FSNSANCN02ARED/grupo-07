module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Producto",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      sockets: {
        type: DataTypes.STRING,
      },  
      ram: {
        type: DataTypes.STRING,
      },
      slots: {
        type: DataTypes.DECIMAL,
      },
      descripción: {
        type: DataTypes.STRING,
      },
      imagen: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "productos",
      timestamps: false,
    }
  );
  Model.associate = (models) => {
    Model.belongsTo(models.Gama, {
      as: "gama",
      foreignKey: "gamaId",
    });
    Model.belongsTo(models.Marca, {
      as: "marca",
      foreignKey: "marcaId",
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
