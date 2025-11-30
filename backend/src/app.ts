import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Server running successfully");
    res.send("Hey from first get api");
});

export default app;