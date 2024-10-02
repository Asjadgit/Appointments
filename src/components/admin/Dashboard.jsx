import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Dashboard = () => {
  const { dashboardData } = useContext(AppContext);
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Doctors */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-700">Total Doctors</h4>
          <p className="text-3xl font-bold text-blue-500 mt-2">{dashboardData.docs ? dashboardData.docs : 0}</p>
        </div>

        {/* Total Patients */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-700">Total Patients</h4>
          <p className="text-3xl font-bold text-green-500 mt-2">{dashboardData ? dashboardData.patients : 0}</p>
        </div>

        {/* Total Appointments */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-700">Pending Appointments</h4>
          <p className="text-3xl font-bold text-purple-500 mt-2">{dashboardData ? dashboardData.appointments: 0}</p>
        </div>

        {/* Recent Appointments */}
        <div className="bg-white shadow-md rounded-lg p-6 col-span-1 sm:col-span-2 lg:col-span-1">
          <h4 className="text-xl font-semibold text-gray-700">Recent Appointments</h4>
          <ul className="list-disc pl-5 mt-2">
            {dashboardData.recentAppointments && dashboardData.recentAppointments.length > 0 ? (
              dashboardData.recentAppointments.map((appointment, index) => (
                <li key={index} className="text-gray-600">
                  {appointment.user.name} - {appointment.doctor.name} - {new Date(appointment.appointment_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </li>
              ))
            ) : (
              <li className="text-gray-600">No recent appointments</li>
            )}
          </ul>
        </div>


        {/* Total Revenue */}
        <div className="bg-white shadow-md rounded-lg p-6 col-span-1 lg:col-span-2">
          <h4 className="text-xl font-semibold text-gray-700">Total Revenue</h4>
          <p className="text-3xl font-bold text-yellow-500 mt-2">$12,500</p>
        </div>

        {/* Doctors Availability */}
        <div className="bg-white shadow-md rounded-lg p-6 col-span-1 sm:col-span-2 lg:col-span-1">
          <h4 className="text-xl font-semibold text-gray-700">Doctors Availability</h4>
          <ul className="list-disc pl-5 mt-2">
            <li className="text-gray-600">Dr. Smith - <span className="text-green-500">Available</span></li>
            <li className="text-gray-600">Dr. Johnson - <span className="text-red-500">Busy</span></li>
            <li className="text-gray-600">Dr. Brown - <span className="text-yellow-500">On Leave</span></li>
          </ul>
        </div>

        {/* System Notifications */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-700">System Notifications</h4>
          <ul className="list-disc pl-5 mt-2">
            <li className="text-gray-600">System maintenance scheduled for Sept 25, 2024</li>
            <li className="text-gray-600">New updates available for the scheduling system</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
