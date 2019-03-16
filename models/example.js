module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define('Example', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  })

  return Example;
}

