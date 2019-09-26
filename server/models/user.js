module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER', {
    user_name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      is_admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {
      tableName: 'USER'
  });
};