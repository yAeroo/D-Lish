<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MainDishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('main_dishes')->insert([
            'name' => 'Filete de Pollo',
            'cafeteria_id' => 1,
            // 'price' => 1.50,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('main_dishes')->insert([
            'name' => 'Fajitas de carne',
            'cafeteria_id' => 1,
            // 'price' => 1.50,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('main_dishes')->insert([
            'name' => 'Alitas de Pollo',
            'cafeteria_id' => 2,
            // 'price' => 1.50,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
