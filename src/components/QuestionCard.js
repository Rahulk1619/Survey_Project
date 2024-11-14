// src/components/QuestionCard.js
import React from "react";

const QuestionCard = ({ question, answer, onAnswer, onNext, onPrevious, onSkip }) => {
  const handleInputChange = (e) => {
    onAnswer(question.id, e.target.value);
  };

  return (
    <div className="question-card">
      <h2>{question.questionText}</h2>
      {question.type === "rating" ? (
        <input
          type="number"
          min="1"
          max={question.scale}
          value={answer || ""}
          onChange={handleInputChange}
        />
      ) : (
        <textarea value={answer || ""} onChange={handleInputChange} />
      )}
      <div className="navigation-buttons">
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onSkip}>Skip</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default QuestionCard;
