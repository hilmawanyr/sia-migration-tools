const { sequelize, Sequelize } = require('../connection');

const mahasiswa = sequelize.define('mahasiswa', {
	'id_mhs': {
		type: Sequelize.DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	'KDPTIMSMHS': {
		type: Sequelize.DataTypes.INTEGER,
		allowNull: true
	},
	'KDJENMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'KDPSTMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'NIMHSMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'NMMHSMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'SHIFTMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'TPLHRMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'TGLHRMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'TAHUNMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'BTSTUMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'TGMSKMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'STMHSMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'SMAWLMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'NIKMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	'NMIBUMSMHS': {
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	}
}, {
	freezeTableName: true,
    timestamps: false,
    tableName: 'tbl_mahasiswa'
});

module.exports = mahasiswa;