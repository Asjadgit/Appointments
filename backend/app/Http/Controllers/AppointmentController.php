<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function Appointments(Request $request)
    {
        $appointment = Appointment::with(['doctor','user'])->latest()->get();
        return response()->json(['appointment' => $appointment], 201);
    }
    public function addAppointments(Request $request)
    {
        $validatedData = $request->validate([
            'doctor_id' => 'required|exists:doctors,id',
            'date' => 'required|date',
            'time_slot' => 'required|string',
            'user_id' => 'required|exists:users,id',
            'consultant_fee' => 'required'
        ]);
        // Create the appointment
        $appointment = Appointment::create([
            'appointment_num' => 'num' . rand(10000, 99999),
            'doc_id' => $validatedData['doctor_id'],
            'appointment_date' => $validatedData['date'],
            'appointment_time' => $validatedData['time_slot'],
            'patient_id' => $validatedData['user_id'],
            'consultation_fee' => $validatedData['consultant_fee'],
        ]);

        return response()->json([
            'message' => 'Appointment successfully booked'
        ], 201);
    }

    public function cancelAppointments($id)
    {
        $appointment = Appointment::find($id);
        if($appointment){
            $appointment->appointment_status = 'Cancelled';
            $appointment->save();
            return response()->json(['message' => 'Appointment cancelled successfully.'], 200);
        }
        return response()->json(['message' => 'Appointment not found or already cancelled.'], 404);
    }

    public function confirmappointments($id)
    {
        $appointment = Appointment::find($id);
        if($appointment){
            $appointment->appointment_status = 'Confirmed';
            $appointment->save();
            return response()->json(['message' => 'Appointment Confirmed successfully.'], 200);
        }
        return response()->json(['message' => 'Appointment not found or already confirmed.'], 404);
    }

    public function finishappointment($id)
    {
        $appointment = Appointment::find($id);
        if($appointment){
            $appointment->appointment_status = 'finished';
            $appointment->payment_status = 'paid';
            $appointment->save();
            return response()->json(['message' => 'Appointment finished successfully.'], 200);
        }
        return response()->json(['message' => 'Appointment not found or already confirmed.'], 404);

    }
}
