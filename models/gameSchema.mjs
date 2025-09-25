// Imports
import mongoose from "mongoose";

//create Schema
const gameSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        validate: {
            validator: async function (userId) {
                const user = await mongoose.models.User.findById({ _id: userId });
                return !!user
            },
            message: (props) => `This user with ${props.path}:${props.value} does not exist`
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        validate: {
            validator: async function (categoryId) {
                const category = await mongoose.models.Category.findById({ _id: categoryId });
                return !!category
            },
            message: (props) => `This category with ${props.path}:${props.value} does not exist`
        }
    },
    score: {
        type: Number,
        required: true,
        min: 0,
    },
    completed: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });
//Index


//export
export default mongoose.model("Game", gameSchema);