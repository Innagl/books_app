const express = require("express");
const cors = require("cors");
const { notes, getNextId } = require("./data/notes");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Books App Backend is running");
});

// GET all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// POST - add a new note
app.post("/api/notes", (req, res) => {
  const { title, author, googleBookId, thumbnail, noteText, rating } = req.body;

  if (!title || !noteText) {
    return res.status(400).json({ message: "title and noteText are required" });
  }

  const newNote = {
    id: getNextId(),
    title,
    author: author || "Unknown Author",
    googleBookId: googleBookId || "",
    thumbnail: thumbnail || "",
    noteText,
    rating: rating || null,
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// PUT - update a note
app.put("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  const { title, author, googleBookId, thumbnail, noteText, rating } = req.body;

  notes[noteIndex] = {
    ...notes[noteIndex],
    title: title ?? notes[noteIndex].title,
    author: author ?? notes[noteIndex].author,
    googleBookId: googleBookId ?? notes[noteIndex].googleBookId,
    thumbnail: thumbnail ?? notes[noteIndex].thumbnail,
    noteText: noteText ?? notes[noteIndex].noteText,
    rating: rating ?? notes[noteIndex].rating,
  };

  res.json(notes[noteIndex]);
});

// DELETE - remove a note
app.delete("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  const deletedNote = notes.splice(noteIndex, 1)[0];
  res.json(deletedNote);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
