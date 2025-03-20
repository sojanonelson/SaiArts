import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Google Map Background */}
      <iframe
        title="Google Map"
        className="absolute inset-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36895.31533043145!2d77.47136858728237!3d12.973096418865728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df4d83b9021%3A0xdbd7ce54dd706f55!2sSai%20Arts!5e1!3m2!1sen!2sin!4v1742471969528!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>
     

      {/* Overlay Contact Section */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">Reach out to us for any inquiries!</p>

        <div className="flex space-x-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/yourwhatsappphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <Phone size={20} />
            <span>Call Us</span>
          </a>

          {/* Email */}
          <a
            href="mailto:yourshopemail@example.com"
            className="flex items-center gap-2 bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            <Mail size={20} />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
