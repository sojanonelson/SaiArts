import { Route, Routes, NavLink } from "react-router-dom";
import Header from "../components/Dashboard/Header";
import Card from "../components/Dashboard/Card";
import Orders from "../screens/Orders";
import Transactions from "../components/Dashboard/Transactions";
import ManageServices from '../screens/ManageService'
import NewOrders from "./NewOrder";
import CompletedOrders from "./CompletedOrders";
import DashboardOverview from "./Overview";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-white p-5">
      <h1 className="text-xl font-bold mb-5">Dashboard</h1>
      <nav>
        <ul className="space-y-4">
          {[
            { path: "/dashboard", name: "Overview" },
            { path: "/dashboard/services", name: "Services" },
            { path: "/dashboard/orders", name: "Orders" }
          ].map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md transition ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};






const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Routes>
          <Route index element={<DashboardOverview/>} />
          <Route path="services" element={<ManageServices />} />
         
          <Route path="orders" element={<Orders />} />
          <Route path="new-orders" element={<NewOrders />} />
          
          <Route path="completed-orders" element={<CompletedOrders />} />
         
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
