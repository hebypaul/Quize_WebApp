import React from 'react';

const Results = ({ quizzes, userAnswers }) => {
  return (
    <div className="p-4 m-24 bg-white rounded-lg shadow-md">
      <h2 className="text-black text-xl font-bold mb-4 text-center">
        Your Results
      </h2>
      <ul className="space-y-4">
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <h3 className="text-black text-lg font-bold mb-2">
              {quiz.question}
            </h3>
            <p className="text-black text-base mb-2">
              Your answer: {userAnswers[index]}
            </p>
            <p className="text-black text-base mb-2">
              Correct answer: {quiz.correctAnswer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
