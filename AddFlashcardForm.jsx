import React, { useState } from "react";
import api from "../api";

const AddFlashcardForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question || !answer) return;
    await api.post("/flashcards", { question, answer });
    setQuestion("");
    setAnswer("");
    alert("Flashcard added! Refresh to see it.");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default AddFlashcardForm;