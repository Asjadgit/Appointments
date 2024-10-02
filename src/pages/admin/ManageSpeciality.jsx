import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { DataGrid } from '@mui/x-data-grid';

const ManageSpeciality = () => {
  const navigate = useNavigate();
  const { specializations } = useContext(AppContext);

  // Define rows and columns for DataGrid
  const columns = [
    { field: 'name', headerName: 'Specialization', flex: 1 }, // Using flex for responsive width
    {
      field: 'image',
      headerName: 'Specialization Logo',
      flex: 1,
      renderCell: (params) => (
        <img src={params.value} alt="Specialization Logo" className='rounded-full w-10 h-10' />
      ),
    },
  ];

  const rows = specializations.map(spec => ({
    id: spec.id,
    name: spec.name,
    image: `http://127.0.0.1:8001/storage/${spec.image}`,
  }));

  return (
    <div className="p-4">
      <div className="mb-4">
        <button
          onClick={() => { navigate('/admin/add-speciliazation'); scrollTo(0, 0); }}
          className="bg-primary rounded-md px-4 py-2 text-white"
        >
          Add Specializations
        </button>
      </div>

      <div>
        <h1 className="text-xl font-bold mb-4 text-center">All Specializations</h1>
        <div className="h-96 p-4"> {/* Set a height for the DataGrid */}
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
                backgroundColor: '#f8f8f8', // Tailwind gray-100
                padding: '10px',
              },
              '& .MuiDataGrid-cell': {
                padding: '5px', // Add padding to cells
              },
              '& .MuiDataGrid-row': {
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Tailwind gray-200
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageSpeciality;
