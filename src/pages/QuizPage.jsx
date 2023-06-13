import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Quiz from '../components/Quiz';
import Loading from '../components/Loading';
import data from '../assets/data.json';
import CancelButton from '../components/CancelButton';

import Modal from '../components/Modal';
import QuizCompleted from '../components/QuizCompleted';
import Results from '../components/Results';
import Button from '../components/Button';

const QuizPage = () => {
  const [showModal, setShowModal] = useState(false);

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  function handleCancelClick() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleConfirmExit() {
    console.log('Exiting page');
    navigate('/');
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setUserAnswers((prevAnswers) => [...prevAnswers, option]);
  };

  const handleContinueClick = async () => {
    if (selectedOption) {
      setIsLoading(true);

      // simulate fetching data or performing other asynchronous operations
      await new Promise((resolve) => setTimeout(resolve, 200));

      if (selectedOption === currentQuiz.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }

      setCurrentQuizIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setIsLoading(false);
    }
  };

  const handleViewResults = () => {

    setShowModal(true);
  };

  const handleRetry = () => {
    console.log('Retrying quiz');
    setCurrentQuizIndex(0);
    setScore(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  const currentQuiz = data.quizzes[currentQuizIndex];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        logoSrc="/logo.jpg"
        title="Quiz Web App"
        child={<CancelButton onClick={handleCancelClick} />}
      />

      <Modal
        show={showModal}
        onClose={handleModalClose}
        onConfirm={handleConfirmExit}
      />
      <div className="p-2 bg-gray-100 flex flex-col flex-grow">
        <div className="flex flex-col justify-center items-center flex-grow">
          {currentQuiz ? (
            <>
              {!showResults && (
                <Quiz
                  question={currentQuiz.question}
                  options={currentQuiz.options}
                  onOptionSelect={handleOptionSelect}
                />
              )}
              {showResults && (
                <>
                <Results quizzes={data.quizzes} userAnswers={userAnswers} />
                </>
              )}
            </>
          ) : (
            <QuizCompleted
              score={score}
              totalQuestions={data.quizzes.length}
              onViewResults={handleViewResults}
              onRetry={handleRetry}
            />
          )}
        </div>
        {currentQuiz && !showResults && (
          <div className="bg-white p-4 rounded-sm flex items-center justify-between">

            <div className="w-1/3">
              <div className="bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width: `${((currentQuizIndex + 1) / data.quizzes.length) *
                      100}%`,
                  }}
                />
              </div>

            </div>
            <div className="font-bold">
                {(currentQuizIndex + 1)} / {data.quizzes.length}            
            </div>
            <Button
              className={`px-4 py-2 rounded-md ${
                selectedOption ? 'bg-green-500 text-white' : 'bg-gray-500 '
              }`}
              onClick={handleContinueClick}
            >
              Continue
            </Button>

          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
