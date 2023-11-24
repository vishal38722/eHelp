const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send(`API is running on PORT ${process.env.PORT || 4000}`);
})

app.use("/api/auth", authRoutes);

const server = app.listen(process.env.PORT || 4000, () =>
  console.log(`Server started on http://localhost:${process.env.PORT || 4000}`)
);
