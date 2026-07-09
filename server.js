import express from "express";
import process from "process";
//hello
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Node.js 20 🚀");
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        node: process.version
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});