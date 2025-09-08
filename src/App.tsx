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
    <div style={{ padding: '24px', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Welcome Section */}
      <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
          Welcome back, Dr. Sarah Johnson! 👋
        </h1>
        <p style={{ color: '#6b7280' }}>
          Here's what's happening at your hospital today.
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280' }}>{stat.title}</p>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginTop: '4px' }}>{stat.value}</p>
                </div>
                <div style={{ width: '48px', height: '48px', backgroundColor: stat.color === 'bg-blue-500' ? '#3b82f6' : stat.color === 'bg-green-500' ? '#10b981' : stat.color === 'bg-purple-500' ? '#8b5cf6' : '#f59e0b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
                {stat.changeType === "increase" ? (
                  <ArrowUpIcon style={{ width: '16px', height: '16px', color: '#10b981', marginRight: '4px' }} />
                ) : (
                  <ArrowDownIcon style={{ width: '16px', height: '16px', color: '#ef4444', marginRight: '4px' }} />
                )}
                <span style={{ fontSize: '14px', fontWeight: '500', color: stat.changeType === "increase" ? '#059669' : '#dc2626' }}>
                  {stat.change}
                </span>
                <span style={{ fontSize: '14px', color: '#6b7280', marginLeft: '4px' }}>from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activities and Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '24px' }}>
        {/* Recent Activities */}
        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Recent Activities</h3>
          <div style={{ marginBottom: '16px' }}>
            {recentActivities.map((activity) => (
              <div key={activity.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px', borderRadius: '8px', marginBottom: '8px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginTop: '8px' }}></div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', color: '#111827' }}>{activity.message}</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                    {activity.patient} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button style={{ width: '100%', padding: '8px 16px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', fontWeight: '500' }}>
            View All Activities
          </button>
        </div>

        {/* Quick Actions */}
        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button style={{ width: '100%', padding: '8px 16px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '500' }}>
              Add New Patient
            </button>
            <button style={{ width: '100%', padding: '8px 16px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', fontWeight: '500' }}>
              Schedule Appointment
            </button>
            <button style={{ width: '100%', padding: '8px 16px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', fontWeight: '500' }}>
              View Reports
            </button>
            <button style={{ width: '100%', padding: '8px 16px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', fontWeight: '500' }}>
              Manage Staff
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Upcoming Appointments</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', color: '#374151' }}>Patient</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', color: '#374151' }}>Doctor</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', color: '#374151' }}>Time</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', color: '#374151' }}>Department</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', color: '#374151' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px 16px' }}>John Doe</td>
                <td style={{ padding: '12px 16px' }}>Dr. Smith</td>
                <td style={{ padding: '12px 16px' }}>10:00 AM</td>
                <td style={{ padding: '12px 16px' }}>Cardiology</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ padding: '4px 8px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '16px', fontSize: '12px' }}>
                    Confirmed
                  </span>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px 16px' }}>Jane Smith</td>
                <td style={{ padding: '12px 16px' }}>Dr. Johnson</td>
                <td style={{ padding: '12px 16px' }}>2:30 PM</td>
                <td style={{ padding: '12px 16px' }}>Neurology</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ padding: '4px 8px', backgroundColor: '#fef3c7', color: '#92400e', borderRadius: '16px', fontSize: '12px' }}>
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}>Mike Wilson</td>
                <td style={{ padding: '12px 16px' }}>Dr. Brown</td>
                <td style={{ padding: '12px 16px' }}>4:15 PM</td>
                <td style={{ padding: '12px 16px' }}>Orthopedics</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ padding: '4px 8px', backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '16px', fontSize: '12px' }}>
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
