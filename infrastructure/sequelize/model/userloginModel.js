const { sequelize, Sequelize } = require('../connection');
const { DataTypes } = Sequelize;

module.exports = sequelize.define('user', {
    'id_user': {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    'username': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'password': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'password_plain': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'userid': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'id_user_group': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'status': {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    'user_type': {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'tbl_user_login'
});