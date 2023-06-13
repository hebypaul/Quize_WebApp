import React, { useState } from 'react';

const Quiz = ({ question, options, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <div className="p-4 w-3/5 bg-gray-200 rounded-lg">
      <h2 className="text-black text-2xl font-bold mb-4">{question}</h2>
      <ul className="space-y-2 m-6">
        {options.map((option, index) => (
          <li
            key={index}
            className={` p-2 rounded-md border border-gray-300 shadow-md hover:shadow-lg hover:border-green-500 cursor-pointer ${
              selectedOption === option ? 'bg-green-500 text-white hover:bg-green-600  hover:border-gray-500' : 'bg-white  hover:bg-gray-50'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
