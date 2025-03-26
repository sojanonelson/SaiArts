import React, { useState } from "react";
import { CheckCircleIcon } from "lucide-react";

const NewOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", item: "Lighting Board", price: "₹1500", date: "2025-03-25" },
    { id: 2, customer: "Jane Smith", item: "2D, 3D Designs", price: "₹2500", date: "2025-03-24" },
    { id: 3, customer: "David Johnson", item: "Flex Board", price: "₹1800", date: "2025-03-23" }
  ]);

  const [markedOrder, setMarkedOrder] = useState(null);

  const handleMarkOrder = (orderId) => {
    setMarkedOrder(orderId);
    setTimeout(() => {
      setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
    }, 1500);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">New Orders</h1>
      <div className="bg-white shadow rounded-lg p-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Item</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.item}</td>
                <td className="p-3">{order.price}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3 text-center">
                  {markedOrder === order.id ? (
                    <span className="text-green-500 font-semibold">Marking as Completed...</span>
                  ) : (
                    <CheckCircleIcon
                      className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-700"
                      onClick={() => handleMarkOrder(order.id)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewOrders;