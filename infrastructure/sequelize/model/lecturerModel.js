const { sequelize, Sequelize } = require('../connection');

const lecturer = sequelize.define('lecturer', {
    'id_kary': {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    'nidn': {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    'nid': {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    'nupn': {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    },
    'nik': {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    },
    'nama': {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    'jns_kel': {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    },
    'alamat': {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    },
    'hp': {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    },
    'email': {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    },
    'jabatan_id': {
        type: Sequelize.DataTypes.STRING,
        defaultValue: 0,
        allowNull: true
    },
    'status': {
        type: Sequelize.DataTypes.TINYINT,
        defaultValue: 1,
        allowNull: true
    },
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'tbl_karyawan'
});

module.exports = lecturer;