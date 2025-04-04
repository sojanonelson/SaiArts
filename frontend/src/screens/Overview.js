import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

// Sample data for charts
const revenueData = [
  { name: 'Jan', revenue: 4000, profit: 2400 },
  { name: 'Feb', revenue: 3000, profit: 1398 },
  { name: 'Mar', revenue: 2000, profit: 9800 },
  { name: 'Apr', revenue: 2780, profit: 3908 },
  { name: 'May', revenue: 1890, profit: 4800 },
  { name: 'Jun', revenue: 2390, profit: 3800 }
];

const salesByCategoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Books', value: 200 },
  { name: 'Furniture', value: 100 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MetricCard = ({ icon: Icon, title, value, change, positive }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-xl transition-shadow">
    <div className="bg-blue-100 p-3 rounded-full mr-4">
      <Icon className="text-blue-500" size={24} />
    </div>
    <div className="flex-grow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold mr-2">{value}</p>
        <span className={`text-sm ${positive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
    </div>
  </div>
);

const DashboardOverview = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Last Updated: Just Now</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Refresh Data
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={DollarSign}
          title="Total Revenue"
          value="$124,567"
          change="+15.7%"
          positive={true}
        />
        <MetricCard
          icon={Users}
          title="New Customers"
          value="1,254"
          change="+12.5%"
          positive={true}
        />
        <MetricCard
          icon={ShoppingCart}
          title="Total Orders"
          value="987"
          change="-3.5%"
          positive={false}
        />
        <MetricCard
          icon={Activity}
          title="Conversion Rate"
          value="3.8%"
          change="+2.1%"
          positive={true}
        />
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Revenue Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                  strokeWidth={2}
                  name="Revenue"
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  name="Profit"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Sales by Category</h2>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesByCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {salesByCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {salesByCategoryData.map((category, index) => (
              <div key={index} className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="overflow-y-auto max-h-32">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Event</th>
                <th className="p-3">Details</th>
                <th className="p-3">Time</th>
                <th className="p-3">Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  event: "New Sale",
                  details: "Premium Laptop",
                  time: "2 mins ago",
                  impact: "+$1,299",
                  type: "positive"
                },
                {
                  event: "Marketing Campaign",
                  details: "Summer Sale Launched",
                  time: "1 hour ago",
                  impact: "+2.5k Visitors",
                  type: "positive"
                },
                {
                  event: "Inventory",
                  details: "Stock Running Low",
                  time: "3 hours ago",
                  impact: "-50 Units",
                  type: "negative"
                },
              ].map((activity, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{activity.event}</td>
                  <td className="p-3">{activity.details}</td>
                  <td className="p-3">{activity.time}</td>
                  <td className="p-3">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${activity.type === 'positive'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'}
                    `}>
                      {activity.impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
