import express from "express"
import { updatedUser, deleteUser, getUser, getUsers } from "../controllers/user.js"
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Update
router.put("/:id", verifyUser, updatedUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

// Get
router.get("/:id", verifyUser, getUser);

// Get all
router.get("/", verifyAdmin, getUsers);

export default router;