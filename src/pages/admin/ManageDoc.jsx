import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { DataGrid } from '@mui/x-data-grid';

const ManageDoc = () => {
  const { Doctors } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Filter appointments based on search term
  const filteredDocs = Doctors.filter((doc) => {
    const searchString = `${doc.name} ${doc.specialization.name}`.toLowerCase(); // Use toLowerCase for case-insensitive comparison
    return searchString.includes(searchTerm.toLowerCase());
  });

  const columns = [
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'contact', headerName: 'Contact', width: 100 },
    { field: 'degree', headerName: 'Degree', width: 150 },
    { field: 'experience', headerName: 'Experience', width: 100 },
    { field: 'fee', headerName: 'Fee', width: 80 },
    { field: 'specialization_id', headerName: 'Specialization', width: 150 },
    { field: 'address', headerName: 'Address', width: 150 },
    {
      field: 'image',
      headerName: 'Doctor Image',
      width: 200,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Doctor"
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
    },
  ];

  const rows = (filteredDocs.length > 0 ? filteredDocs : Doctors).map((doc) => ({
    id: doc.id,
    name: doc.name,
    email: doc.email,
    contact: doc.contact,
    degree: doc.degree,
    experience: doc.experience,
    fee: doc.fee,
    specialization_id: doc.specialization.name, // Make sure this exists in your data structure
    address: doc.address,
    image: `http://127.0.0.1:8001/storage/${doc.image}`,
  }));

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mb-4">
        <button
          onClick={() => {
            navigate('/admin/add-doctors');
            scrollTo(0, 0);
          }}
          className="bg-primary rounded-md px-4 py-2 text-white hover:bg-primary-dark transition duration-300 w-full sm:w-auto"
        >
          Add Doctors
        </button>
      </div>

      <div>
        <h1 className="text-xl font-bold mb-4 text-center">All Doctors</h1>
        {/* Search Bar */}
        <div className="mb-8 text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by doctor name and Specialization"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
          />
        </div>

        <div className="h-80 sm:h-96 lg:h-[500px] p-2 sm:p-4">
        {filteredDocs.length === 0 && searchTerm ? (
          <div className="flex items-center justify-center h-full">
              <span className="text-gray-500">No matched data found</span>
          </div>
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            paginationMode="client"
            sx={{
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#f8f8f8',
                padding: '10px',
              },
              '& .MuiDataGrid-cell': {
                padding: '5px',
              },
              '& .MuiDataGrid-row': {
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              },
              '& .MuiDataGrid-root': {
                border: 'none', // Remove default border for a cleaner look
              },
            }}
            disableColumnMenu
            className="w-full"
          />
        )}
          
        </div>
      </div>
    </div>
  );
};

export default ManageDoc;
