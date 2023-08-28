<?php

namespace Database\Seeders;

use App\Models\SideDish2;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SideDish2Seeder extends Seeder
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
                'name' => 'Ensalada',
                'cafeteria_id' => 1,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Chimol',
                'cafeteria_id' => 1,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            //Cafeteria 2
            [
                'name' => 'Ensalada',
                'cafeteria_id' => 2,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Chimol',
                'cafeteria_id' => 2,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Coditos',
                'cafeteria_id' => 2,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            //Cafeteria 3
            [
                'name' => 'Ensalada',
                'cafeteria_id' => 3,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Chimol',
                'cafeteria_id' => 3,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        SideDish2::insert($registros);
    }
}
