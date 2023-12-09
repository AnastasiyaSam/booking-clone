import express from "express"
import { createHotel, updatedHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelsByCity } from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
// Create
router.post("/", verifyAdmin, createHotel);

// Update
router.put("/:id", verifyAdmin, updatedHotel);

// Delete
router.delete("/:id", verifyAdmin,  deleteHotel);

// Get
router.get("/find/:id", getHotel);

// Get all
router.get("/", getHotels);
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/findByCity", getHotelsByCity)

export default router;