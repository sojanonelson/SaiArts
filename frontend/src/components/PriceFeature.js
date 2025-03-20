import React from "react";
import { CheckCircle, PhoneCall, Printer, Truck } from "lucide-react";

const steps = [
  {
    icon: <CheckCircle size={40} className="text-yellow-500" />, 
    title: "Select Product & Request a Quote",
    description: "Choose your product & its variant and request a quote."
  },
  {
    icon: <PhoneCall size={40} className="text-yellow-500" />, 
    title: "Receive Quote & Confirm Details",
    description: "We’ll contact you with a quote and confirm the job details."
  },
  {
    icon: <Printer size={40} className="text-yellow-500" />, 
    title: "Printing Process Begins",
    description: "Your custom print job is processed at our state-of-the-art facility in Pune, India."
  },
  {
    icon: <Truck size={40} className="text-yellow-500" />, 
    title: "Collect or Get it Shipped",
    description: "Your custom print is ready! Collect it from our office or get it shipped."
  }
];

const CustomPrintSteps = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">GET YOUR CUSTOM PRINT IN 4 EASY STEPS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            {step.icon}
            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
        View Our Prices
      </button>
    </section>
  );
};

export default CustomPrintSteps;