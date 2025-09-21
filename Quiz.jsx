import React, { useEffect, useState } from "react";
import api from "../api";

const Quiz = () => {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState("false");

  useEffect(() => {
    api.get("/flashcards")
      .then(res => setCards(res.data));
  }, []);

  const handleSubmit = () => {
    if (answer.toLowerCase().trim() === cards[index].answer.toLowerCase().trim()) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert(`Wrong! Correct Answer: ${cards[index].answer}`);
    }
    setAnswer("");
    setIndex((index + 1) % cards.length);
  };

  if (!cards.length) return <p>Loading quiz...</p>;

  return (
    <div className="quiz">
      <h2>Quiz Mode</h2>
      <p>Q: {cards[index].question}</p>
      <input
        type="text"
        placeholder="Your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;