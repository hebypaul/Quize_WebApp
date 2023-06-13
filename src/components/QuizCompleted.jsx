import React from 'react';
import { FaTrophy , FaHome , FaRedo} from 'react-icons/fa';

import Button
 from './Button';
const QuizCompleted = ({ score, totalQuestions, onViewResults, onRetry }) => {
  return (
    <div className="p-4 py-6 w-1/4  bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-4">
      <FaTrophy className="text-yellow-500 text-8xl font-bold" />
      </div>
      <h2 className="text-black text-xl font-bold mb-4 text-center">
        Quiz completed!
      </h2>
      <p className="text-black text-lg mb-4 text-center">
        Your score: {score} / {totalQuestions}
      </p>
      <div className="flex items-center justify-center space-x-4">
        <Button
          className="text-xl bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          onClick={onViewResults}
        >
          <FaHome />
        </Button>
        <Button
          className="text-xl text-white px-4 py-2 rounded-md"
          onClick={onRetry}
        >
          <FaRedo />
        </Button>
      </div>
    </div>
  );
};

export default QuizCompleted;
