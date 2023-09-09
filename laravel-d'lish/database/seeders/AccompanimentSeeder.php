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
                'name' => 'Tortilla de maíz',
                'cafeteria_id' => 1,
                // 'price' => 0,
                'img' => 'tortilla.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            //Cafeteria 2
            [
                'name' => 'Tortilla',
                'cafeteria_id' => 2,
                'img' => 'tortilla.jpg',
                // 'price' => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Tortilla Frita',
                'cafeteria_id' => 2,
                'img' => 'tortilla_frita.jpg',
                // 'price' => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            //Cafeteria 3
            [
                'name' => 'Tortilla de maíz',
                'cafeteria_id' => 2,
                'img' => 'tortilla.jpg',
                // 'price' => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Tortilla de arroz',
                'cafeteria_id' => 3,
                'img' => 'tortilla.jpg',
                // 'price' => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ];

        Accompaniment::insert($Registros);
    }
}
