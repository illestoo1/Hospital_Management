import { PlusIcon, MagnifyingGlassIcon, StarIcon } from "@heroicons/react/24/outline";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      email: "sarah.johnson@hospital.com",
      phone: "+1 (555) 123-4567",
      experience: "15 years",
      rating: 4.8,
      patients: 245,
      status: "Available"
    },
    {
      id: 2,
      name: "Dr. Michael Smith",
      specialty: "Neurology",
      email: "michael.smith@hospital.com",
      phone: "+1 (555) 234-5678",
      experience: "12 years",
      rating: 4.9,
      patients: 189,
      status: "Available"
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: "Pediatrics",
      email: "emily.brown@hospital.com",
      phone: "+1 (555) 345-6789",
      experience: "8 years",
      rating: 4.7,
      patients: 156,
      status: "On Leave"
    },
    {
      id: 4,
      name: "Dr. David Wilson",
      specialty: "Orthopedics",
      email: "david.wilson@hospital.com",
      phone: "+1 (555) 456-7890",
      experience: "20 years",
      rating: 4.6,
      patients: 312,
      status: "Available"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doctors</h1>
          <p className="text-gray-600 mt-1">Manage medical staff and specialists</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Add New Doctor</span>
        </button>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hospital-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="card hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 bg-hospital-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                doctor.status === 'Available' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {doctor.status}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
            <p className="text-hospital-600 font-medium mb-2">{doctor.specialty}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-20">Experience:</span>
                <span className="font-medium">{doctor.experience}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-20">Patients:</span>
                <span className="font-medium">{doctor.patients}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-20">Rating:</span>
                <div className="flex items-center">
                  <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="font-medium">{doctor.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600">{doctor.email}</p>
              <p className="text-sm text-gray-600">{doctor.phone}</p>
            </div>
            
            <div className="flex space-x-2">
              <button className="btn-primary flex-1 text-sm py-2">
                View Profile
              </button>
              <button className="btn-secondary text-sm py-2 px-3">
                Schedule
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <h3 className="text-2xl font-bold text-gray-900">156</h3>
          <p className="text-gray-600">Total Doctors</p>
        </div>
        <div className="card text-center">
          <h3 className="text-2xl font-bold text-green-600">142</h3>
          <p className="text-gray-600">Available</p>
        </div>
        <div className="card text-center">
          <h3 className="text-2xl font-bold text-yellow-600">14</h3>
          <p className="text-gray-600">On Leave</p>
        </div>
        <div className="card text-center">
          <h3 className="text-2xl font-bold text-blue-600">4.8</h3>
          <p className="text-gray-600">Avg Rating</p>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
