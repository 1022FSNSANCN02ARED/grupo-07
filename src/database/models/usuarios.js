module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre:{type:DataTypes.STRING},
      apellido:{type:DataTypes.STRING},
      email:{type:DataTypes.STRING} ,
      avatar:{type:DataTypes.STRING},
      password:{type:DataTypes.STRING}, 
      telefono:{type:DataTypes.STRING},
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
      through: "carrito",
      sourceKey:"id",
     // timestamps: false,
    });
  };

  return Model;
};
