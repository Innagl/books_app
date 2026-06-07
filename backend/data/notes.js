const notes = [
  {
    id: 1,
    title: "The Women",
    author: "Kristin Hannah",
    googleBookId: "example-id-1",
    thumbnail: "",
    noteText: "A powerful story about friendship and war.",
    rating: 5,
  },
];

let nextId = 2;

module.exports = { notes, getNextId: () => nextId++, setNextId: (id) => { nextId = id; } };
