module.exports = (sequelize, DataTypes) => {
  const alias="Marca";
  let cols={
    id:{
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement:true,
    },
    marca:{
      type:DataTypes.STRING(100),
    },
  };

  let config={tableName:"marca",timestamps:false};
  const Marca=sequelize.define(alias,cols,config);

  Marca.associate=function(models){
    Marca.hasMany(models.Producto,{
      sourceKey:"id",
      targetKey:"marcaId",
    });
  };
return Marca;
};
