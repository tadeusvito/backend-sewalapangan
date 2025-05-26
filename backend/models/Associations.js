import User from "./UserModel.js";
import Field from "./LapanganModel.js";
import Booking from "./BookingModel.js";

User.hasMany(Booking, { foreignKey: 'id_user' });
Booking.belongsTo(User, { foreignKey: 'id_user' });

Field.hasMany(Booking, { foreignKey: 'id_field' });
Booking.belongsTo(Field, { foreignKey: 'id_field' });

export { User, Field, Booking };
