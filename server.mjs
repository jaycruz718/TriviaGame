// Imports
import express from "express";
import dotenv from "dotenv";
import { globalErr, log } from "./middleware/middleware.mjs";
import connectDB from "./db/conn.mjs";
import usersSchema from "./models/usersSchema.mjs";


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// DB Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(log);

// Routes
app.use("/api/users", usersSchema);
// app.use("/api/game", gameSchema);
// app.use("/api/question", questionSchema);

// Global Err Handling
app.use(globalErr);

// Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});