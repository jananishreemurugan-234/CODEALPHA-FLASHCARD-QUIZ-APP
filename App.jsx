import React from "react";
import Flashcards from "./components/Flashcards";
import Quiz from "./components/Quiz";
import AddFlashcardForm from "./components/AddFlashcardForm";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <h1>Flashcard Quiz App</h1>
      <AddFlashcardForm />
      <Flashcards />
      <Quiz />
    </div>
  );
}

export default App;
