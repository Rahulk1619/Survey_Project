// src/services/localStorageService.js
const LOCAL_STORAGE_KEY = "surveyAnswers";


export const saveAnswer = (questionId, answer) => {
  const currentAnswers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  currentAnswers[questionId] = answer;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentAnswers));
};

export const getAnswers = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
};
