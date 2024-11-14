// src/App.js
import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionCard from "./components/QuestionCard";
import ProgressIndicator from "./components/ProgressIndicator";
import ConfirmDialog from "./components/ConfirmDialog";
import ThankYouScreen from "./components/ThankYouScreen";
import { saveAnswer, getAnswers } from "./services/localStorageService";

const App = () => {
// Example question data
  const questions = [
    { id: 1, questionText: "How satisfied are you with our products?(Scale of 1-5)", type: "rating", scale: 5},
    { id: 2, questionText: "How fair are the prices compared to similar retailers?(Scale of 1-5)", type: "rating", scale: 5 },
    { id: 3, questionText: "How satisfied are you with the value for money of your purchase?(Scale of 1-5)", type: "rating", scale: 5 },
    { id: 4, questionText: "On a scale of 1-10, how would you recommend us?", type: "rating", scale: 10 },
    { id: 5, questionText: "What could we do to improve our service?", type: "text" }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [answers, setAnswers] = useState(getAnswers());
  const [isConfirming, setIsConfirming] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const startSurvey = () => setCurrentQuestionIndex(0);

  const handleAnswer = (questionId, answer) => {
    const updatedAnswers = { ...answers, [questionId]: answer };
    setAnswers(updatedAnswers);
    saveAnswer(questionId, answer);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsConfirming(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const skipQuestion = () => nextQuestion();

  const submitSurvey = () => {
    setIsCompleted(true);
    // clearAnswers();
  };

  const resetSurvey = () => {
    setIsCompleted(false);
    setIsConfirming(false);
    setCurrentQuestionIndex(null);
  };

  return (
    <div className="App">
      {currentQuestionIndex === null ? (
        <WelcomeScreen onStart={startSurvey} />
      ) : isCompleted ? (
        <ThankYouScreen onTimeout={resetSurvey} />
      ) : isConfirming ? (
        <ConfirmDialog onConfirm={submitSurvey} onCancel={() => setIsConfirming(false)} />
      ) : (
        <>
          <ProgressIndicator current={currentQuestionIndex + 1} total={questions.length} />
          <QuestionCard
            question={questions[currentQuestionIndex]}
            answer={answers[questions[currentQuestionIndex].id]}
            onAnswer={handleAnswer}
            onNext={nextQuestion}
            onPrevious={previousQuestion}
            onSkip={skipQuestion}
          />
        </>
      )}
    </div>
  );
};

export default App;
