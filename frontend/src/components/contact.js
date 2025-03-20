// src/components/ContactInfo.js
import React from 'react';

function ContactInfo() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-tl-2xl rounded-bl-2xl  space-y-5  lg:space-y-8">
      <a  href="https://wa.me/+919526612042?text=I%20am%20interested%20in%20your%20stickers" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
        <img className='animate-pulse w-8 h-8' src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp"  />
        {/* <span>WhatsApp</span> */}
      </a>
      <a href="tel:+919526612042" className="flex items-center space-x-2">
        <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="Phone" className="w-6 h-6" />
        {/* <span>+YOUR_PHONE_NUMBER</span> */}
      </a>
      <a href="mailto:your-email@example.com" className="flex items-center space-x-2">
        <img src="https://img.icons8.com/ios-filled/50/000000/secured-letter.png" alt="Email" className="w-6 h-6" />
        {/* <span>your-email@example.com</span> */}
      </a>
    </div>
  );
}

export default ContactInfo;
