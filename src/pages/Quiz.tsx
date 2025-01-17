import React, { useState } from 'react';
import { quizQuestions } from '../data/quiz';

export default function Quiz() {
  const [answers, setAnswers] = useState<number[]>(new Array(quizQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const newScore = answers.reduce((acc, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    setScore(newScore);
    setShowResults(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Climate Change Quiz</h1>
      
      <div className="space-y-8">
        {quizQuestions.map((question, qIndex) => (
          <div key={question.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
            <div className="space-y-2">
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center">
                  <input
                    type="radio"
                    id={`q${qIndex}-${oIndex}`}
                    name={`question-${qIndex}`}
                    className="mr-2"
                    checked={answers[qIndex] === oIndex}
                    onChange={() => handleAnswer(qIndex, oIndex)}
                  />
                  <label htmlFor={`q${qIndex}-${oIndex}`}>{option}</label>
                </div>
              ))}
            </div>
            {showResults && (
              <div className="mt-4 text-sm">
                <p className={answers[qIndex] === question.correctAnswer ? "text-green-600" : "text-red-600"}>
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!showResults ? (
        <button
          onClick={handleSubmit}
          className="mt-8 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Your Score: {score} / {quizQuestions.length}</h2>
          <p className="mt-2 text-gray-600">
            {score === quizQuestions.length ? "Perfect score! You're a climate expert!" :
             score >= quizQuestions.length * 0.7 ? "Great job! You know your climate facts!" :
             "Keep learning about climate change!"}
          </p>
        </div>
      )}
    </div>
  );
}