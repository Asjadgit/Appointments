<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\SpecializationController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/users',[UserController::class,'store']);
Route::post('/userImage/{id}',[UserController::class,'update']);
Route::post('/login',[UserController::class,'login']);

// dashboard
Route::get('/dashboard',[UserController::class,'dashboard']);

// pateints
Route::get('/getpatients',[UserController::class,'getpatients']);

// specialization
Route::get('/getspciality',[SpecializationController::class,'getspciality']);
Route::post('/add-specialization',[SpecializationController::class,'addSpeciality']);

// doctors
Route::get('/getDoctors',[DoctorController::class,'getDoctors']);
Route::post('/add-doctor',[DoctorController::class,'addDoctor']);

// appointments
Route::post('/add-appointments',[AppointmentController::class,'addAppointments']);
Route::get('/myappointment',[AppointmentController::class,'Appointments']);
Route::post('/cancelappointment/{id}',[AppointmentController::class,'cancelAppointments']);
Route::post('/confirmappointment/{id}',[AppointmentController::class,'confirmappointments']);
Route::post('/finishappointment/{id}',[AppointmentController::class,'finishappointment']);
