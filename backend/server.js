require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const notesRoutes = require("./routes/notes");

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Books App Backend is running");
});

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
