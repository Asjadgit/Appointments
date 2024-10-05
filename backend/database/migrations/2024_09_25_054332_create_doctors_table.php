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
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('password');
            $table->string('degree');
            $table->string('contact');
            // $table->string('specialization');
            $table->unsignedBigInteger('specialization_id');
            $table->string('experience');
            $table->string('about');
            $table->string('fee');
            $table->string('address');
            $table->string('image');
            $table->string('role')->default('doc');
            $table->timestamps();

            $table->foreign('specialization_id')->references('id')->on('specializations');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};
