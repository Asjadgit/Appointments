import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

const ManageUsers = () => {
  const { Patients } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter appointments based on search term
  const filteredPatient = Patients.filter((pat) => {
    const searchString = `${pat.name}`.toLowerCase(); // Use toLowerCase for case-insensitive comparison
    return searchString.includes(searchTerm.toLowerCase());
  });

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'contact', headerName: 'Contact', width: 150 },
    { field: 'address', headerName: 'Address', width: 250 },
    {
      field: 'image',
      headerName: 'Patient Image',
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Doctor"
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
    },
  ];

  const rows = (filteredPatient.length > 0 ? filteredPatient : Patients).map((pat) => ({
    id: pat.id,
    name: pat.name,
    email: pat.email,
    contact: pat.contact,
    address: pat.address,
    image: `http://127.0.0.1:8001/storage/${pat.image}`,
  }));

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div>
        <h1 className="text-xl font-bold mb-4 text-center">All Patients</h1>
        {/* Search Bar */}
        <div className="mb-8 text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Patient name"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
          />
        </div>
        <div className="h-80 sm:h-96 lg:h-[500px] p-2 sm:p-4">
          {filteredPatient.length === 0 && searchTerm ? (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-500">No matched data found</span>
            </div>
          ) : (
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10, 25, 50, 100]}
              paginationMode="client"
              sx={{
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#f8f8f8',
                  padding: '10px',
                  textAlign: 'center',
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
                '& .MuiDataGrid-cell': {
                  padding: '5px',
                  display: 'flex',
                  justifyContent: 'center', // Center cell content horizontally
                  alignItems: 'center', // Center cell content vertically
                  textAlign: 'center', // Ensure text is centered
                },
              }}
              disableColumnMenu
              autoHeight
              className="w-full"
            />
        )};
        </div>

      </div>
    </div>
  );
}

export default ManageUsers
