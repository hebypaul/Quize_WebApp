import React from 'react';
import { FaTimes } from 'react-icons/fa';

function CancelButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <FaTimes />
    </button>
  );
}

export default CancelButton;