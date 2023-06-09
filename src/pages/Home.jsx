import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { FaCog } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  function handleonClick() {
    console.log("settings clicked")
  }
  return (
    <>
      <div className="flex flex-col h-screen">
      <Header
          logoSrc="/logo.jpg"
          title="Quiz Web App"
          child={
            <Button onClick={handleonClick} className=" bg-green-500 text-white">
              <FaCog />
            </Button>
          }
        />
      <div className="flex flex-col justify-center items-center flex-grow ">

        <div className="pb-8">

          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className=" font-bold text-5xl leading-tight text-center text-gray-900  font-sans">Test Your Software Skills</h1>
            <h3 className="text-xl leading-tight text-center text-gray-500 pt-2 pb-7  font-">Challenge yourself with a programing quize </h3>
          </div>
          <div className="flex justify-center">
            <Button className ="bg-green-500 mx-2 hover:bg-green-700 " onClick={() => navigate('/quiz')} >Start Quiz</Button>
          </div>
        </div>

      </div>
      </div>
    </>
  )
}

export default Home