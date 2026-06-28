const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, default: "Unknown Author" },
    googleBookId: { type: String, default: "" },
    thumbnail: { type: String, default: "" },
    noteText: { type: String, required: true },
    rating: { type: Number, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
