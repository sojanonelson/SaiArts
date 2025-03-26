
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from 'lucide-react';

const PriceListSection = () => {
  const navigate = useNavigate();

  const services = [
    "Lighting Board",
    "2D, 3D Designs",
    "Flex Board",
    "Computerised Stickering",
    "House Name Board",
    "Number Plates",
    "Visiting Cards",
    "Eco Solvent Vinyl"
  ];

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Package className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service}
                </h3>
                <button 
                  onClick={handleViewAllServices}
                  className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button 
            onClick={handleViewAllServices}
            className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
          >
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceListSection;
