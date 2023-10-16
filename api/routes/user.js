import express from "express"
import { updatedUser, deleteUser, getUser, getUsers } from "../controllers/user.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in!")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account!")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all acoounts!")
})

// Update
router.put("/:id", updatedUser);

// Delete
router.delete("/:id", deleteUser);

// Get
router.get("/:id", getUser);

// Get all
router.get("/", getUsers);

export default router;