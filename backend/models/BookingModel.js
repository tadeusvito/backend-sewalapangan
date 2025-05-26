import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./UserModel.js";
import Field from "./LapanganModel.js";

const { DataTypes } = Sequelize;

const Booking = db.define('booking', {
    id_booking: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id_user'
        }
    },
    id_field: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Field,
            key: 'id_field'
        }
    },
    tanggal_booking: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    jam_mulai: {
        type: DataTypes.TIME,
        allowNull: false
    },
    jam_selesai: {
        type: DataTypes.TIME,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('booked', 'canceled', 'done'),
        defaultValue: 'booked'
    }
}, {
    freezeTableName: true,
});

export default Booking;

(async () => {
    await db.sync();
})();
