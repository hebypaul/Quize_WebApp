import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
