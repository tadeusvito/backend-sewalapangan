import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('user', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
        // Password akan di-hash menggunakan bcrypt sebelum disimpan
    },
    nomor_telepon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alamat: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('Penyewa', 'Admin'),
        allowNull: false,
        defaultValue: 'Penyewa'
    },
    photo_url: {
        type: DataTypes.TEXT,
        allowNull: true
        // URL ke foto profil pengguna
    },
    refresh_token: {
        type: DataTypes.TEXT,
        allowNull: true
        // Disimpan saat user login, untuk verifikasi sesi login
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default User;

(async () => {
    await db.sync();
})();
