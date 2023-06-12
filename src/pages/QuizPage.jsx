import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CancelButton from '../components/CancelButton';

import Modal from '../components/Modal';

const QuizPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function handleCancelClick() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleConfirmExit() {
    console.log('Exiting page');
    navigate("/")
  }


  return (
    
    <div>
        <div className="flex">
            QuizPage
            <CancelButton onClick={handleCancelClick} />
        </div>
        <Modal
          show={showModal}
          onClose={handleModalClose}
          onConfirm={handleConfirmExit}
        />
    </div>
  )
}

export default QuizPage