
import mongoose from "mongoose";

const questionSchema = mongoose.Schema[{
    question: {type: String, required: true},
    options: [{
        type: String,
        // enum: ["option a", "option b", "option c", "option d"],
        required: true}],
    correctAnswer: {type: String, required: true},
    points: {type: String, required: true},
    difficulty: {type: String,
        enum: ["Easy", "Intermediate", "Hard", "Legend"],
        required: true},
    category: { type: mongoose.isObjectId, ref: "category", required: true},
    genre: {type: String,
            enum: ["Thriller", "Rom-Con", "Anime", "Horror", "Action", "Drama", "Mystery"]}
}];

// Create Index
questionSchema.index ({ question: 1 });
questionSchema.index ({ genre: 1 });

export default mongoose.model("Questions", questionSchema);