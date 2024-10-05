<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getpatients()
    {
        $pateints = User::where('role', 'user')->get();
        return response()->json(['pateints' => $pateints]);
    }
    public function store(Request $request)
    {
        // Validate the form data
        // $validatedData = $request->validate([
        //     'name' => 'required|string',
        //     'email' => 'required|string|email|unique:users',
        //     'contact' => 'required|string',
        //     'address' => 'required|string',
        //     'password' => 'required|string|min:8',
        //     'gender' => 'required|string',
        //     'Image' => 'required'
        // ]);

        // file upload handling
        if ($request->hasFile('Image')) {
            $filepath = $request->file('Image')->store('profile', 'public');
        } else {
            $filepath = 'No Image';
        }

        // Creating User
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->contact = $request->input('contact');
        $user->address = $request->input('address');
        $user->password = Hash::make($request->input('password'));
        $user->gender = $request->input('gender');
        $user->image = $filepath;
        $user->save();

        // Return success response
        return response()->json(['message' => 'User registered successfully'], 201);
    }

    public function login(Request $request)
    {
        $email = $request->input('email');
        $pass = $request->input('password');
        // Retrieve the user by email
        $user = User::where('email', $email)->first();

        // Check if the user exists and if the password is correct
        if ($user && Hash::check($pass, $user->password)) {
            // Optionally, create a token or session here
            return response()->json([
                'message' => 'User Logged In successfully',
                'user' => $user,
            ], 200);
        } else {
            $doc = Doctor::where('email', $email)->first();
            if ($doc && Hash::check($pass, $doc->password)) {
                // Optionally, create a token or session here
                return response()->json([
                    'message' => 'Doctor Logged In successfully',
                    'user' => $doc,
                ], 200);
            }
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function update(Request $request)
    {
        // Validate the form data
        $validatedData = $request->validate([
            'user_id' => 'required',
            'image' => 'required'
        ]);

        if ($request->hasFile('image')) {
            $filepath = $request->file('image')->store('profile', 'public');
        } else {
            $filepath = 'No Image';
        }
        $user = User::find($validatedData['user_id']);
        if ($user) {
            $user->image = $filepath;
        }
        return response()->json(['message' => 'Image Updated Successfully']);
    }

    public function dashboard()
    {
        $docs = Doctor::count();
        $pateints = User::where('role', 'user')->count();
        $appintments = Appointment::where('appointment_status', 'pending')->count();
        $appointmentsLast5Days = Appointment::with(['doctor', 'user'])->whereBetween('appointment_date', [Carbon::now()->subDays(5), Carbon::now()])
            ->where('appointment_status', 'pending')
            ->get();

        return response()->json([
            'docs' => $docs,
            'pateints' => $pateints,
            'appintments' => $appintments,
            'recentAppointments' => $appointmentsLast5Days
        ]);
    }
}
