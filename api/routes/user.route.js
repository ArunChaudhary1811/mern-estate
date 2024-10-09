import express from "express";
import { deleteUser, test, updateUser, getUserListings } from "../controllers/user.controller.js";
import { varifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", varifyToken, updateUser);
router.delete("/delete/:id", varifyToken, deleteUser);
router.get("/listings/:id", varifyToken, getUserListings);

export default router;