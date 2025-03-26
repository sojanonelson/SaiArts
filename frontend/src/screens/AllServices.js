import React, { useState } from "react";
import { services } from "../Data/service";
import { X } from "lucide-react";

const AllServices = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-md transition-transform transform hover:scale-100">
            <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <button
              onClick={() => openModal(service)}
              className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Request Service
            </button>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedService?.title}</h2>
              <button onClick={closeModal}>
                <X className="text-gray-600 hover:text-gray-800" />
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllServices;
