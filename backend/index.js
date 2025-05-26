import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import LapanganRoutes from "./routes/LapanganRoutes.js";
import BookingRoutes from "./routes/BookingRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.use(LapanganRoutes);
app.use(BookingRoutes);
app.use(UserRoutes);