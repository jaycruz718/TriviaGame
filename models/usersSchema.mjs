import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";


const { Schema, Types } = mongoose;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 13,
        minlength: 2
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: [true, 'Email address is required']
    },
    password: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    badges: [{
        type: Schema.Types.ObjectId,
        ref: "Badge"
    }],
    incorrectQuestions: [{
            type: Schema.Types.ObjectId,
            ref: "Question"
        
    }]
});

// Indexes
usersSchema.index({ username: 1 });
usersSchema.index({ isAdmin: 1 });

export default mongoose.model("User", usersSchema);