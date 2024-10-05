<?php

namespace App\Http\Controllers;

use App\Models\Specialization;
use Illuminate\Http\Request;

class SpecializationController extends Controller
{
    public function getspciality()
    {
        $speciliazation = Specialization::all();
        return response()->json(['speciliazation' => $speciliazation]);
    }
    public function addSpeciality(Request $req)
    {
        // Validate the form data
        $validatedData = $req->validate([
            'name' => 'required|string',
            'image' => 'required'
        ]);

        // file upload
        if($req->hasFile('image')){
            $filepath = $req->file('image')->store('specialization','public');
        }else{
            $filepath = 'no image';
        }

        $spec = new Specialization();
        $spec->name = $validatedData['name'];
        $spec->image = $filepath;
        $spec->save();

        // Return success response
        return response()->json(['message' => 'Added successfully'], 201);
    }
}
