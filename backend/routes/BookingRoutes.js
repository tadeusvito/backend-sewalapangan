import express from "express";
import {
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
} from "../controller/BookingController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get("/bookings", verifyToken, getBookings);
router.get("/bookings/:id", verifyToken, getBookingById);
router.post("/bookings", verifyToken, createBooking);
router.put("/bookings/:id", verifyToken, updateBooking);
router.delete("/bookings/:id", verifyToken, deleteBooking);
router.get("/token", refreshToken);

export default router;
