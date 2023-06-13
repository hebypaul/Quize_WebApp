import React from 'react';
import { FaTimes } from 'react-icons/fa';

function CancelButton({ onClick }) {
  return (
    <button className="text-white font-bold py-2 px-4 rounded"onClick={onClick}>
      <FaTimes />
    </button>
  );
}

export default CancelButton;