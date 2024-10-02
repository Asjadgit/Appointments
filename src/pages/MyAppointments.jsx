import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const MyAppointments = () => {
  const { user } = useContext(AppContext);
  const {appointment} = useContext(AppContext);
  const [myappointment,setappointment] = useState([]);

  const filterAppointments = (appointment, user) => {
      if(user){
        return appointment.filter((appoint) => appoint.patient_id == user.id && appoint.appointment_status !== 'Cancelled'); 
      } else{
        return [];
      }
  }

  useEffect(() => {
    const result = filterAppointments(appointment,user);
    // console.log(result);
    setappointment(result);
  },[myappointment,user]);

  const handleCancelAppointment = async (appointmentId) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      // console.log(appointmentId);
      try {
          const res = axios.post(`http://127.0.0.1:8001/api/myappointment/${appointmentId}`)
          .then((response) => {
            if(response.status === 200){
              alert('Appointment Cancelled Successfully');
              window.location.reload();
            }
          })
      } catch (error) {
        console.log(error);
        alert('Something Wrong! Can not Cancel');
      }
    }
  }


  const columns = [
    { field: 'appointment_num', headerName: 'Appointment Number', width: 180 },
    { field: 'appointment_date', headerName: 'Appointment Date', width: 150 },
    { field: 'appointment_time', headerName: 'Appointment Time', width: 150 },
    { field: 'doc_id', headerName: 'Doc Name', width: 150 },
    { field: 'appointment_status', headerName: 'Appointment Status', width: 150 },
    { field: 'consultation_fee', headerName: 'Appointment Fee', width: 150 },
    { field: 'payment_status', headerName: 'Payment Status', width: 150 },
    { field: 'action', 
      headerName: 'Action', width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color={params.row.appointment_status === 'Cancelled' ? 'secondary' : 'primary'}
          onClick={() => handleCancelAppointment(params.row.id)}
          disabled={params.row.appointment_status === 'Confirmed' || params.row.appointment_status === 'finished'}
        >
          {params.row.appointment_status === 'finished'
              ? 'Finished'
              : params.row.appointment_status === 'pending'
                ? 'Cancel'
                : 'Confirmed'}
        </Button>
      )
      
    },
  ];

  const rows = myappointment.map((appoint) => ({
    id: appoint.id,
    appointment_num: appoint.appointment_num,
    appointment_date: appoint.appointment_date,
    appointment_time: appoint.appointment_time,
    doc_id: appoint.doctor.name,
    appointment_status: appoint.appointment_status,
    consultation_fee: `$${appoint.consultation_fee}`,
    payment_status: appoint.payment_status,
  }));

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">

      <div>
        <h1 className="text-xl font-bold mb-4 text-center">My Appointments</h1>
        <div className="h-80 sm:h-96 lg:h-[500px] p-2 sm:p-4">
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
                textAlign: 'center', // Center text in header
              },
              '& .MuiDataGrid-cell': {
                padding: '5px',
                display: 'flex',
                justifyContent: 'center', // Center cell content horizontally
                alignItems: 'center', // Center cell content vertically
                textAlign: 'center', // Ensure text is centered
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
            autoHeight
            className="w-full"
          />

        </div>
      </div>
    </div>
  )
}

export default MyAppointments
