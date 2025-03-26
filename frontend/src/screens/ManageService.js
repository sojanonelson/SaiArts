import React, { useState } from "react";
import { PlusIcon, MoreVertical } from "lucide-react";

const Button = ({ children, variant = "default", className = "", onClick, type = "button" }) => {
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 hover:bg-gray-100"
  };

  return (
    <button
      type={type}
      className={`px-4 py-2 rounded flex items-center justify-center ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ManageServices = () => {
  const [services, setServices] = useState([
    { id: 1, title: "Web Development", content: "Custom websites & applications." },
    { id: 2, title: "SEO Optimization", content: "Improve search rankings & visibility." },
    { id: 3, title: "UI/UX Design", content: "User-friendly design for apps & websites." },
    { id: 4, title: "Cloud Solutions", content: "Deploy applications on scalable cloud infrastructure." }
  ]);

  const [newService, setNewService] = useState({ title: "", content: "" });
  const [menuOpen, setMenuOpen] = useState(null); // Track which menu is open

  const handleAddService = () => {
    if (!newService.title || !newService.content) {
      alert("Please fill in both title and content");
      return;
    }

    const serviceToAdd = {
      id: services.length + 1,
      title: newService.title,
      content: newService.content
    };

    setServices([...services, serviceToAdd]);
    setNewService({ title: "", content: "" });
  };

  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
    setMenuOpen(null); // Close menu after deleting
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Manage Services</h1>
        <Button variant="outline" onClick={handleAddService}>
          <PlusIcon className="mr-2 h-4 w-4" /> Add Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="relative border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              
              {/* Three-dot menu button */}
              <button onClick={() => setMenuOpen(menuOpen === service.id ? null : service.id)} className="p-2 hover:bg-gray-200 rounded-full">
                <MoreVertical size={20} />
              </button>

              {/* Dropdown menu */}
              {menuOpen === service.id && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg">
                  <button onClick={() => handleDeleteService(service.id)} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                    Delete
                  </button>
                </div>
              )}
            </div>

            <p className="text-gray-600 mt-2">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
