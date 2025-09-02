import Layout from "./components/Layout";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import { 
  UserGroupIcon, 
  UserIcon, 
  CalendarIcon, 
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";

// Dashboard component
function Dashboard() {
  const stats = [
    {
      title: "Total Patients",
      value: "2,847",
      change: "+12%",
      changeType: "increase",
      icon: UserGroupIcon,
      color: "bg-blue-500"
    },
    {
      title: "Active Doctors",
      value: "156",
      change: "+5%",
      changeType: "increase",
      icon: UserIcon,
      color: "bg-green-500"
    },
    {
      title: "Appointments Today",
      value: "89",
      change: "-3%",
      changeType: "decrease",
      icon: CalendarIcon,
      color: "bg-purple-500"
    },
    {
      title: "Revenue This Month",
      value: "$284,392",
      change: "+18%",
      changeType: "increase",
      icon: CurrencyDollarIcon,
      color: "bg-orange-500"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "appointment",
      message: "New appointment scheduled with Dr. Smith",
      time: "2 minutes ago",
      patient: "John Doe"
    },
    {
      id: 2,
      type: "patient",
      message: "Patient check-in completed",
      time: "15 minutes ago",
      patient: "Jane Smith"
    },
    {
      id: 3,
      type: "doctor",
      message: "Dr. Johnson updated patient records",
      time: "1 hour ago",
      patient: "Mike Wilson"
    },
    {
      id: 4,
      type: "billing",
      message: "Payment received for consultation",
      time: "2 hours ago",
      patient: "Sarah Brown"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="card">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, Dr. Sarah Johnson! 👋
        </h1>
        <p className="text-gray-600">
          Here's what's happening at your hospital today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                {stat.changeType === "increase" ? (
                  <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activities and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className="w-2 h-2 bg-hospital-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {activity.patient} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-secondary w-full mt-4">
            View All Activities
          </button>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="btn-primary w-full">
              Add New Patient
            </button>
            <button className="btn-secondary w-full">
              Schedule Appointment
            </button>
            <button className="btn-secondary w-full">
              View Reports
            </button>
            <button className="btn-secondary w-full">
              Manage Staff
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Patient</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Doctor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Department</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">Dr. Smith</td>
                <td className="py-3 px-4">10:00 AM</td>
                <td className="py-3 px-4">Cardiology</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Confirmed
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Jane Smith</td>
                <td className="py-3 px-4">Dr. Johnson</td>
                <td className="py-3 px-4">2:30 PM</td>
                <td className="py-3 px-4">Neurology</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Mike Wilson</td>
                <td className="py-3 px-4">Dr. Brown</td>
                <td className="py-3 px-4">4:15 PM</td>
                <td className="py-3 px-4">Orthopedics</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    In Progress
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "Patients":
        return <Patients />;
      case "Doctors":
        return <Doctors />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
