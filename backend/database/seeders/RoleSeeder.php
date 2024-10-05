<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = ['doctor', 'admin','pateint'];
        foreach ($roles as $roleName) {
            Role::create(['name' => $roleName]); // Create the role directly
        }
    }
}
