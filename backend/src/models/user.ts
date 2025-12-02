import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

export default mongoose.model("User", userSchema);