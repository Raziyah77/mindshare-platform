const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const messageRoutes = require("./routes/messageRoutes");
const reportRoutes = require("./routes/reportRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(

    "/api/session",

    sessionRoutes

);

app.use(

    "/api/message",

    messageRoutes

);

app.use(

    "/api/report",

    reportRoutes

);

app.get("/", (req, res) => {
    res.send("Welcome to MindShare API.");
});


const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});