<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $fillable = ['appointment_num','appointment_date','appointment_time','doc_id','patient_id','appointment_status','consultation_fee','patient_notes','payment_status'];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class,'doc_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'patient_id');
    }
}
