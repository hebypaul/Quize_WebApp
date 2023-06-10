// Modal.js
import React from 'react';
import Button from './Button';
function Modal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      <div className="bg-white p-8 rounded shadow-lg z-10">
        <p className="text-lg font-semibold mb-4">
          Are you sure you want to exit the page?
        </p>
        <div className="flex justify-end">
          <Button
            onClick={onConfirm}
            className="bg-green-500 mx-2 hover:bg-green-700"
          >
            Yes
          </Button>
          <Button
            onClick={onClose}
            className=" bg-gray-200 text-black rounded hover:bg-gray-400"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
