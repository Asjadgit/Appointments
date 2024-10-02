import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const ManageAppointments = () => {
  const { appointment } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [myappointment,setappointment] = useState([]);
  const appointmentsPerPage = 10; // Number of appointments to show per page

  const filterAppointments = (appointment) => {
      if(appointment){
        return appointment.filter((appoint) => appoint.appointment_status === 'pending'); 
      } else{
        return [];
      }
  }

  useEffect(() => {
    const result = filterAppointments(appointment);
    // console.log(result);
    setappointment(result);
  },[appointment]);

  // Filter appointments based on search term
  const filteredAppointments = myappointment.filter((appoint) => {
    const searchString = `${appoint.user.name} ${appoint.doctor.name} ${appoint.appointment_num}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);

  // Calculate the appointments to display for the current page
  const startIndex = (currentPage - 1) * appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(startIndex, startIndex + appointmentsPerPage);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl font-bold mb-8 text-center">All Appointments</h1>
      
      {/* Search Bar */}
      <div className="mb-8 text-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by patient, doctor, or appointment number"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {currentAppointments.map((appoint) => (
          <div key={appoint.id} className="bg-white shadow-lg rounded-lg flex items-stretch">
            {/* Patient Image */}
            <div className="w-2/5">
              <img
                src={`http://127.0.0.1:8001/storage/${appoint.user.image}`}
                alt="Patient"
                className="w-full h-full object-cover p-2"
              />
            </div>

            {/* Appointment Details */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{appoint.user.name}</h2>
                <p className="text-gray-600 mb-2"><strong>Doctor:</strong> {appoint.doctor.name}</p>
                <p className="text-gray-600 mb-2"><strong>Appointment Number:</strong> {appoint.appointment_num}</p>
                <p className="text-gray-600 mb-2"><strong>Date:</strong> {appoint.appointment_date}</p>
                <p className="text-gray-600 mb-2"><strong>Time:</strong> {appoint.appointment_time}</p>
                <p className="text-gray-600 mb-2"><strong>Status:</strong> {appoint.appointment_status}</p>
                <p className="text-gray-600 mb-2"><strong>Fee:</strong> ${appoint.consultation_fee}</p>
              </div>
              
              <p className="text-gray-600"><strong>Payment Status:</strong> {appoint.payment_status}</p>
            </div>
          </div>
        ))}
        {/* Handle case when no appointments match the search term */}
        {searchTerm && filteredAppointments.length === 0 && (
          <div className="col-span-1 md:col-span-2 text-center text-gray-600">
            No appointments found for the search term.
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 border rounded-lg bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-2 text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2 border rounded-lg bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageAppointments;
