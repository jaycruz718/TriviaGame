import mongoose from "mongoose";
import express from "express";
import usersSchema from "../models/usersSchema.mjs";
const router = express.Router();


router
    .route("/:id")
    .get(async (req, res) => {
    try {
        const users = await usersSchema.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;