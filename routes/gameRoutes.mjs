import express from "express";
import Game from "../models/gameSchema.mjs";
import User from "../models/userSchema.mjs";

const router = express.Router();

router
.route("/")
.post(async (req, res, next)=> {
    try {
        const { userId, gameId } = req.body;
        const user = await User.findById(userId);
        const game = await Game.findById(gameId);
        if (!user || !game) {
            return res.status(404).json({ message: "User or Game not found" });
        }
        // Proceed with the game logic
    } catch (error) {
        next(error);
    }
});