import express from "express"
import { createHotel, updatedHotel, deleteHotel, getHotel, getHotels } from "../controllers/hotel.js"

const router = express.Router();
// Create
router.post("/", createHotel);

// Update
router.put("/:id", updatedHotel);

// Delete
router.delete("/:id", deleteHotel);

// Get
router.get("/:id", getHotel);

// Get all
router.get("/", getHotels);

export default router;