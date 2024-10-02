import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';

const MyPatients = () => {
  const { user } = useContext(AppContext);
  const { appointment } = useContext(AppContext);
  const [mypatients, setmypatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filterAppointments = (appointment, user) => {
    if (user) {
      return appointment.filter((appoint) => appoint.doc_id === user.id && appoint.appointment_status !== 'Cancelled');
    } else {
      return [];
    }
  }

  // Filter appointments based on search term
  const filteredPatients = appointment.filter((appo) => {
    const searchString = `${appo.appointment_num} ${appo.user.name} ${appo.appointment_date}`.toLowerCase(); // Use toLowerCase for case-insensitive comparison
    return searchString.includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    const result = filterAppointments(appointment, user);
    setmypatients(result);
  }, [mypatients, user]);

  const handleCancelAppointment = async (appointmentId) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      try {
        const response = await axios.post(`http://127.0.0.1:8001/api/cancelappointment/${appointmentId}`);

        // Check for the correct response status
        if (response.status === 200) {
          alert('Appointment Cancelled Successfully');
          window.location.reload();
        }
      } catch (error) {
        console.log("Error cancelling appointment:", error); // Debug log
        alert('Something went wrong! Cannot cancel');
      }
    }
  };

  const handleConfirmAppointment = async (appointmentId) => {
    // console.log(appointmentId);
    try {
      const response = await axios.post(`http://127.0.0.1:8001/api/confirmappointment/${appointmentId}`);
      if (response.status === 200) {
        alert('Appointment Confirmed');
      }
    } catch (error) {
      console.log(error);
      alert('Something Wrong! Can not Confirm');
    }
  }

  const handleFinishAppointment = async (appointmentId) => {
    // console.log(appointmentId);
    try {
      const response = await axios.post(`http://127.0.0.1:8001/api/finishappointment/${appointmentId}`);
      if (response.status === 200) {
        alert('Appointment Done');
      }
    } catch (error) {
      console.log(error);
      alert('Something Wrong! Can not Finish');
    }
  }


  const columns = [
    { field: 'appointment_num', headerName: 'Appointment Number', width: 180 },
    { field: 'appointment_date', headerName: 'Appointment Date', width: 150 },
    { field: 'appointment_time', headerName: 'Appointment Time', width: 150 },
    { field: 'patient_id', headerName: 'Patient Name', width: 150 },
    { field: 'appointment_status', headerName: 'Appointment Status', width: 150 },
    { field: 'consultation_fee', headerName: 'Appointment Fee', width: 150 },
    { field: 'payment_status', headerName: 'Payment Status', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color={
              params.row.appointment_status === 'pending'
                ? 'primary'
                : params.row.appointment_status === 'Confirmed'
                  ? 'secondary'
                  : 'default'
            }
            onClick={() => {
              if (params.row.appointment_status === 'pending') {
                handleConfirmAppointment(params.row.id); // Confirm appointment
              } else if (params.row.appointment_status === 'Confirmed') {
                handleFinishAppointment(params.row.id); // Finish appointment
              }
            }}
            disabled={params.row.appointment_status === 'finished'} // Disable if already finished
          >
            {params.row.appointment_status === 'finished'
              ? 'Finished'
              : params.row.appointment_status === 'Confirmed'
                ? 'Done'
                : 'Confirm'}
          </Button>

          <Button
            variant="contained"
            color={params.row.appointment_status === 'Confirmed' ? 'primary' : 'secondary'}
            onClick={() => handleCancelAppointment(params.row.id)}
            disabled={params.row.appointment_status === 'Confirmed' || params.row.appointment_status === 'finished'}
          >
            Cancel
          </Button>
        </>
      )
    }
  ];

  const rows = (filteredPatients.length > 0 ? filteredPatients : mypatients).map((appoint) => ({
    id: appoint.id,
    appointment_num: appoint.appointment_num,
    appointment_date: appoint.appointment_date,
    appointment_time: appoint.appointment_time,
    patient_id: appoint.user.name,
    appointment_status: appoint.appointment_status,
    consultation_fee: `$${appoint.consultation_fee}`,
    payment_status: appoint.payment_status,
  }));

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div>
        <h1 className="text-xl font-bold mb-4 text-center">My Patients</h1>
        {/* search box */}
        <div className="mb-8 text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by patient name, appointment number and Specialization"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
          />
        </div>

        <div className="h-80 sm:h-96 lg:h-[500px] p-2 sm:p-4">

          {filteredPatients.length === 0 && searchTerm ? (
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
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                },
                '& .MuiDataGrid-cell': {
                  padding: '5px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                },
                '& .MuiDataGrid-row': {
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                },
                '& .MuiDataGrid-root': {
                  border: 'none',
                },
              }}
              disableColumnMenu
              autoHeight
              className="w-full"
            />
          )}
        </div>
      </div>
    </div >
  );
}

export default MyPatients;
