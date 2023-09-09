<?php

namespace Database\Seeders;

use App\Models\SideDish1;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SideDish1Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $registros = [
            //Cafeteria 1
            [
                'name' => 'Arroz',
                'cafeteria_id' => 1,
                'img' => 'arroz.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Casamiento',
                'cafeteria_id' => 1,
                'img' => 'casamiento.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            //Cafeteria 2
            [
                'name' => 'Arroz',
                'cafeteria_id' => 2,
                'img' => 'arroz.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Casamiento',
                'cafeteria_id' => 2,
                'img' => 'casamiento.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            //Cafeteria 3
            [
                'name' => 'Arroz',
                'cafeteria_id' => 3,
                'img' => 'arroz.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Casamiento',
                'cafeteria_id' => 3,
                'img' => 'casamiento.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ];

        SideDish1::insert($registros);
    }
}
