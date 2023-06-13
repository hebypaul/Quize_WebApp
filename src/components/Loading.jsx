import React from 'react';
import { FaRedo } from 'react-icons/fa';
const Loading = () => {
  return (
    <div className="flex flex-col h-screen flex-grow">
    <div className="flex items-center justify-center h-full">
      <p className="text-green-500 text-4xl font-bold animate-spin ml-4 "> <FaRedo /> </p>
      <p className="text-green-500 text-2xl font-bold">Loading...</p>
    </div>
    </div>
  );
};

export default Loading;