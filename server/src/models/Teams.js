const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Teams',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
  },{timestamps: false})}