import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const DoctorHome = () => {
    const { appointment } = useContext(AppContext);
    // console.log(appointment);
    const [appointmentStat, setappointmentStat] = useState({
        totalAppointments: 0,
        pendingAppointments: 0,
        todayTotalAppointments: 0,
        todayPendingAppointments: 0,
        todayConfirmedAppointments: 0,
        todayCompletedAppointments: 0,
    });

    const claculateData = () => {
        const todayDate = new Date().toISOString().split('T')[0];
        // console.log(todayDate);
        let total = 0, pending = 0, todayTotal = 0, todayPending = 0, todayConfirmed = 0, todayCompleted = 0;
        if (appointment && Array.isArray(appointment)) {
            appointment.forEach((app) => {
                // console.log(app);
                total++;
                if (app.appointment_status === 'pending') {
                    pending++;
                }

                if (todayDate === app.appointment_date) {
                    todayTotal++;
                    if (app.appointment_status === 'pending') {
                        todayPending++;
                    }
                    if (app.appointment_status === 'Confirmed') {
                        todayConfirmed++;
                    }
                    if (app.appointment_status === 'finished') {
                        todayCompleted++;
                    }
                }
            })
        }
        setappointmentStat({
            totalAppointments: total,
            pendingAppointments: pending,
            todayTotalAppointments: todayTotal,
            todayPendingAppointments: todayPending,
            todayConfirmedAppointments: todayConfirmed,
            todayCompletedAppointments: todayCompleted,
        });
    }
    useEffect(() => {
        claculateData();
    }, [appointment]);
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    Doctor Dashboard
                </h1>

                {/* Grid for displaying the stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">

                    {/* Total Appointments */}
                    <div className="bg-blue-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4">Total Appointments</h2>
                        <p className="text-4xl font-bold">{appointmentStat.totalAppointments}</p>
                    </div>

                    {/* Pending Appointments */}
                    <div className="bg-yellow-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4">Pending Appointments</h2>
                        <p className="text-4xl font-bold">{appointmentStat.pendingAppointments}</p>
                    </div>

                    {/* Today's Total Appointments */}
                    <div className="bg-indigo-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4">Today's Total Appointments</h2>
                        <p className="text-4xl font-bold">{appointmentStat.todayTotalAppointments}</p>
                    </div>

                    {/* Today's Pending Appointments */}
                    <div className="bg-red-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4">Today's Pending Appointments</h2>
                        <p className="text-4xl font-bold">{appointmentStat.todayPendingAppointments}</p>
                    </div>

                    {/* Today's Confirmed Appointments */}
                    <div className="bg-green-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4">Today's Confirmed Appointments</h2>
                        <p className="text-4xl font-bold">{appointmentStat.todayConfirmedAppointments}</p>
                    </div>

                    {/* Today's Completed Appointments */}
                    <div className="bg-teal-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4">Today's Completed Appointments</h2>
                        <p className="text-4xl font-bold">{appointmentStat.todayCompletedAppointments}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorHome;
