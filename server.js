import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const filePath = "./data/flashcards.json";

// Helper functions
const readData = () => JSON.parse(fs.readFileSync(filePath, "utf8"));
const writeData = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// Get all flashcards
app.get("/api/flashcards", (req, res) => {
  res.json(readData());
});

// Add flashcard
app.post("/api/flashcards", (req, res) => {
  const flashcards = readData();
  const newCard = { id: Date.now(), ...req.body };
  flashcards.push(newCard);
  writeData(flashcards);
  res.json(newCard);
});

// Update flashcard
app.put("/api/flashcards/:id", (req, res) => {
  const flashcards = readData();
  const id = parseInt(req.params.id);
  const index = flashcards.findIndex(card => card.id === id);
  if (index !== -1) {
    flashcards[index] = { ...flashcards[index], ...req.body };
    writeData(flashcards);
    res.json(flashcards[index]);
  } else {
    res.status(404).json({ message: "Flashcard not found" });
  }
});

// Delete flashcard
app.delete("/api/flashcards/:id", (req, res) => {
  let flashcards = readData();
  const id = parseInt(req.params.id);
  flashcards = flashcards.filter(card => card.id !== id);
  writeData(flashcards);
  res.json({ message: "Flashcard deleted" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));