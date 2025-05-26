import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Field = db.define('field', {
    id_field: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_field: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lokasi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jenis_rumput: {
        type: DataTypes.STRING,
        allowNull: false
    },
    harga_per_jam: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT
    },
    gambar: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
});

export default Field;

(async () => {
    await db.sync();
})();
