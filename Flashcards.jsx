import React, { useEffect, useState } from "react";
import api from "../api";

const Flashcards = () => {
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    api.get("/flashcards")
      .then(res => setCards(res.data));
  }, []);

  if (!cards.length) return <p>No flashcards available</p>;

  return (
    <div className="flashcard">
      <h2>{showAnswer ? cards[current].answer : cards[current].question}</h2>
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Show Question" : "Show Answer"}
      </button>
      <div className="navigation">
        <button onClick={() => setCurrent((current - 1 + cards.length) % cards.length)}>Previous</button>
        <button onClick={() => setCurrent((current + 1) % cards.length)}>Next</button>
      </div>
    </div>
  );
};

export default Flashcards;