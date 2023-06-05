import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <header className="bg-white shadow">
        
      </header>
      <div class="flex justify-center items-center min-h-screen">
        <div >
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Page Title</h1>
          </div>
          <Button className ="bg-green-500 hover:bg-green-700">Start Quiz</Button>
        </div>

      </div>
    </>
  )
}

export default App
