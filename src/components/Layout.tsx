import { ReactNode } from "react";
import { 
  HomeIcon, 
  UserGroupIcon, 
  UserIcon, 
  CalendarIcon, 
  BuildingOfficeIcon, 
  CreditCardIcon, 
  ChartBarIcon, 
  Cog6ToothIcon,
  BellIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

type LayoutProps = {
  children: ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
};

const sidebarItems = [
  { name: "Dashboard", icon: HomeIcon },
  { name: "Patients", icon: UserGroupIcon },
  { name: "Doctors", icon: UserIcon },
  { name: "Appointments", icon: CalendarIcon },
  { name: "Departments", icon: BuildingOfficeIcon },
  { name: "Billing", icon: CreditCardIcon },
  { name: "Reports", icon: ChartBarIcon },
  { name: "Settings", icon: Cog6ToothIcon },
];

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-hospital-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">🏥</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Hospital</h2>
              <p className="text-sm text-gray-500">Management System</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.name;
              
              return (
                <div
                  key={item.name}
                  className={`sidebar-item ${isActive ? 'active' : ''}`}
                  onClick={() => onPageChange(item.name)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-800">{currentPage}</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hospital-500 focus:border-transparent"
              />
            </div>
            
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* Profile */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-gray-200"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
