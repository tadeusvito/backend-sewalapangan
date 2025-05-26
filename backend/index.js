import express from "express";
import cors from "cors";
import LapanganRoutes from "./routes/LapanganRoutes.js";
import BookingRoutes from "./routes/BookingRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(LapanganRoutes);
app.use(BookingRoutes);
app.use(UserRoutes);

app.listen(5000, () => console.log('Server telah berjalan di port 5000'));