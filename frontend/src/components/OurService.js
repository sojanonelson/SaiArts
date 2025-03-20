import React, { useState } from "react";
import { services } from "../Data/service";

const OurService = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 fade-in">
          FIND THE PERFECT SERVICE FOR YOU
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Div: List of Services */}
          <div className="w-full md:w-1/3">
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`p-4 cursor-pointer rounded-lg transition duration-300 ${
                    selectedService.title === service.title
                      ? "bg-indigo-200 text-black"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedService(service);
                    setIsMobileServiceOpen(selectedService.title === service.title ? !isMobileServiceOpen : true);
                  }}
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  {/* Mobile: Show details below the clicked service */}
                  {selectedService.title === service.title && isMobileServiceOpen && (
                    <div className="mt-4 md:hidden">
                      <p className="text-gray-600">{service.description}</p>
                      <div className=" grid-cols-1 flex flex-row gap-4 mt-4">
                        {service.images.map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`${service.title} ${index + 1}`}
                              className="w-full h-48 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Div: Selected Service Details and Images (Desktop Only) */}
          <div className="w-full md:w-2/3 hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedService.title}
              </h3>
              <p className="text-gray-600 mb-6">{selectedService.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedService.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${selectedService.title} ${index + 1}`}
                      className="w-full h-60 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;