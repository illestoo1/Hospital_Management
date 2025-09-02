import { PlusIcon, MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";

function Patients() {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      age: 35,
      gender: "Male",
      bloodType: "O+",
      lastVisit: "2024-01-15",
      status: "Active"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+1 (555) 234-5678",
      age: 28,
      gender: "Female",
      bloodType: "A-",
      lastVisit: "2024-01-20",
      status: "Active"
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.wilson@email.com",
      phone: "+1 (555) 345-6789",
      age: 42,
      gender: "Male",
      bloodType: "B+",
      lastVisit: "2024-01-18",
      status: "Inactive"
    },
    {
      id: 4,
      name: "Sarah Brown",
      email: "sarah.brown@email.com",
      phone: "+1 (555) 456-7890",
      age: 31,
      gender: "Female",
      bloodType: "AB+",
      lastVisit: "2024-01-22",
      status: "Active"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600 mt-1">Manage patient records and information</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Add New Patient</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hospital-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary flex items-center space-x-2">
              <FunnelIcon className="w-5 h-5" />
              <span>Filter</span>
            </button>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hospital-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Patients Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Contact</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Age/Gender</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Blood Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Visit</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{patient.name}</p>
                      <p className="text-sm text-gray-500">ID: {patient.id}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm text-gray-900">{patient.email}</p>
                      <p className="text-sm text-gray-500">{patient.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-900">{patient.age} years, {patient.gender}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      {patient.bloodType}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-900">{patient.lastVisit}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      patient.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="text-hospital-600 hover:text-hospital-700 text-sm font-medium">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">Showing 1-4 of 4 patients</p>
        <div className="flex space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-2 bg-hospital-600 text-white rounded-lg text-sm">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Patients;
