import express from "express";
import cors from "cors";
const app = express();
import connectDB from "./config/db";

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    console.log("Server running successfully");
    res.send("Hey from first get api");
});

export default app;