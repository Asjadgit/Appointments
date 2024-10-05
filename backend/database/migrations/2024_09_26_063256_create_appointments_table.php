<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('appointment_num'); // Unique identifier for each appointment
            $table->date('appointment_date'); // Date of the appointment
            $table->string('appointment_time'); // Time of the appointment (start time)
            $table->unsignedBigInteger('doc_id'); // Foreign key for doctor
            $table->unsignedBigInteger('patient_id'); // Foreign key for patient
            $table->string('appointment_status')->default('pending'); // Appointment status (e.g., pending, confirmed, completed, etc.)
            $table->decimal('consultation_fee', 8, 2)->nullable(); // Fee for the appointment
            $table->text('patient_notes')->nullable(); // Optional notes from the patient
            $table->string('payment_status')->default('pending'); // Payment status
            $table->timestamps();

            $table->foreign('doc_id')->references('id')->on('doctors');
            $table->foreign('patient_id')->references('id')->on('users');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
