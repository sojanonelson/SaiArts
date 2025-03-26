import React from "react";
import { useNavigate } from "react-router-dom";
import { Package, CheckCircle } from "lucide-react";

const OrderCard = ({ title, description, icon: Icon, bgColor, onClick }) => (
  <div 
    onClick={onClick}
    className={`
      ${bgColor} 
      p-6 
      rounded-xl 
      shadow-md 
      hover:shadow-xl 
      transition-all 
      duration-300 
      cursor-pointer 
      flex 
      flex-col 
      items-center 
      justify-center 
      space-y-4 
      transform 
      hover:-translate-y-2
    `}
  >
    <div className="bg-white/20 p-4 rounded-full">
      <Icon size={48} className="text-white" />
    </div>
    <div className="text-center">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  </div>
);

const Order = () => {
  const navigate = useNavigate();

  const orderTypes = [
    {
      title: "New Orders",
      description: "View and process recent incoming orders",
      icon: Package,
      bgColor: "bg-blue-500",
      route: "/dashboard/new-orders"
    },
    {
      title: "Completed Orders",
      description: "Review and track finished orders",
      icon: CheckCircle,
      bgColor: "bg-green-500",
      route: "/dashboard/completed-orders"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50  flex-col items-center justify-center p-5">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-10 text-left">
          Order Management
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {orderTypes.map((order, index) => (
            <OrderCard
              key={index}
              title={order.title}
              description={order.description}
              icon={order.icon}
              bgColor={order.bgColor}
              onClick={() => navigate(order.route)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;