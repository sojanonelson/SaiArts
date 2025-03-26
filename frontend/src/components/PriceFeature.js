import React from "react";
import { CheckCircle, User, PhoneCall, Printer } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <CheckCircle size={40} className="text-yellow-500" />, 
    title: "Select Service & Enter Details",
    description: "Choose your service and provide your name, phone number, and email."
  },
  {
    icon: <PhoneCall size={40} className="text-yellow-500" />, 
    title: "Service Team Contacts You",
    description: "Our team will reach out to confirm your requirements and discuss further details."
  },
  {
    icon: <Printer size={40} className="text-yellow-500" />, 
    title: "Processing Begins",
    description: "Once confirmed, we proceed with the service as per your requirements."
  }
];

const CustomPrintSteps = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">GET YOUR SERVICE IN 3 EASY STEPS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            {step.icon}
            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
      <Link to='/services'>
      <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
        Get Started
      </button>
      </Link>
     
    </section>
  );
};

export default CustomPrintSteps;