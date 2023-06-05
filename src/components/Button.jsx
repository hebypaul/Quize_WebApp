import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
