<?php

namespace Database\Seeders;

use App\Models\Accompaniment;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AccompanimentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Registros = [
            //Cafeteria 1
            [
                'name' => 'Tortillas',
                'cafeteria_id' => 1,
                // 'price' => 0,
                'img' => 'tortilla.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            //Cafeteria 2
            [
                'name' => 'Tortillas',
                'cafeteria_id' => 2,
                // 'price' => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            //Cafeteria 3
            [
                'name' => 'Tortillas',
                'cafeteria_id' => 3,
                // 'price' => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ];

        Accompaniment::insert($Registros);
    }
}
