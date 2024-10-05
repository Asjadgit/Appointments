<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DoctorController extends Controller
{
    public function getDoctors()
    {
        $doctors = Doctor::with('specialization')->get();
        return response()->json(['doctor' => $doctors]);
    }
    public function addDoctor(Request $req)
    {
        // Validate the form data
        $validatedData = $req->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:doctors',
            'password' => 'required|min:8',
            'degree' => 'required|string',
            'contact' => 'required|string',
            'specialization' => 'required',
            'experience' => 'required|string',
            'about' => 'required|string',
            'fee' => 'required|string',
            'address' => 'required|string',
            'image' => 'required'
        ]);

        // file upload handling
        if ($req->hasFile('image')) {
            $filepath = $req->file('image')->store('doctors', 'public');
        } else {
            $filepath = 'No Image';
        }

        // Creating User
        $user = new Doctor();
        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->contact = $validatedData['contact'];
        $user->address = $validatedData['address'];
        $user->password = Hash::make($validatedData['password']);
        $user->degree = $validatedData['degree'];
        $user->experience = $validatedData['experience'];
        $user->specialization_id = $validatedData['specialization'];
        $user->about = $validatedData['about'];
        $user->fee = $validatedData['fee'];
        $user->image = $filepath;
        $user->save();

        // Return success response
        return response()->json(['message' => 'Doctor registered successfully'], 201);
    }
}
