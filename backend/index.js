import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import LapanganRoutes from "./routes/LapanganRoutes.js";
import BookingRoutes from "./routes/BookingRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import db from "./config/database.js";

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

// Test DB connection
(async () => {
  try {
    await db.authenticate();
    console.log("Database connected...");
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

app.get("/", (req, res) => {
  res.send("API Sewa Lapangan is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});