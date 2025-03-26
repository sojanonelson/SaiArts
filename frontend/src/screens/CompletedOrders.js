import React, { useState } from "react";
import {services} from "../Data/service";

const CompletedOrders = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const completedOrders = services.map((service, index) => ({
        id: index + 1,
        title: service.title,
        description: service.description,
        image: service.images[0],
        completedDate: new Date().toLocaleDateString()
    }));

    const filteredOrders = completedOrders.filter(order =>
        order.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Completed Orders</h1>
            <input
                type="text"
                placeholder="Search orders..."
                className="w-full p-2 mb-4 border rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="overflow-x-auto">
                <table className="min-w-full border rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border">Order ID</th>
                            <th className="py-2 px-4 border">Title</th>
                            <th className="py-2 px-4 border">Description</th>
                            <th className="py-2 px-4 border">Completed Date</th>
                            <th className="py-2 px-4 border">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id} className="border">
                                <td className="py-2 px-4 border text-center">{order.id}</td>
                                <td className="py-2 px-4 border">{order.title}</td>
                                <td className="py-2 px-4 border">{order.description}</td>
                                <td className="py-2 px-4 border text-center">{order.completedDate}</td>
                                <td className="py-2 px-4 border">
                                    <img src={order.image} alt={order.title} className="w-20 h-20 object-cover rounded" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedOrders;
