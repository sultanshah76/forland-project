import React from 'react';
import { FiMessageCircle } from 'react-icons/fi'; // Import WhatsApp icon from react-icons library

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=(+92)3246083897" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-10 flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <FiMessageCircle className="text-xl"></FiMessageCircle>
    </a>
  );
};

export default WhatsAppButton;
