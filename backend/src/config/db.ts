import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const URI = process.env.MONGO_URI;

        if(!URI) {
            throw new Error("MongoDB URI is missiing from .ENV file.")
        }

        await mongoose.connect(URI).then(() => {
            console.log("MongoDB is connected using Localhost.")
        });

    } catch(error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
};

export default connectDB;
