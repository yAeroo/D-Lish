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
        // DB::table('side_dishes1')->insert([
        //     'name' => 'Arroz',
        //     'cafeteria_id' => 1,
        //     'price' => 0.50,
        //     'created_at' => Carbon::now(),
        //     'updated_at' => Carbon::now(),
        // ]);

        $registros = [
            [
                'name' => 'Arroz',
                'cafeteria_id' => 1,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Casamiento',
                'cafeteria_id' => 1,
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ];

        SideDish1::insert($registros);
    }
}
