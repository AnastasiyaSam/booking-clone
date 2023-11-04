import express from "express"
import { createRoom, updatedRoom, deleteRoom, getRoom, getRooms } from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
// Create
router.post("/:hotelid", verifyAdmin, createRoom);

// Update
router.put("/:id", verifyAdmin, updatedRoom);

// Delete
router.delete("/:id/:hotelid", verifyAdmin,  deleteRoom);

// Get
router.get("/:id", getRoom);

// Get all
router.get("/", getRooms);

export default router;