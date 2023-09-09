<?php

namespace Database\Seeders;

use App\Models\Drink;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DrinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $registros = [
            //cafeteria 1
            [
                'name' => 'Fresco Tamarindo',
                'cafeteria_id' => 1,
                'img' => 'tamarindo.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Fresco Jamaica',
                'cafeteria_id' => 1,
                'img' => 'jamaica.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Fresco Té',
                'cafeteria_id' => 1,
                'img' => 'te.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            //Cafeteria 2
            [
                'name' => 'Fresco Limonada',
                'cafeteria_id' => 2,
                'img' => 'limonada.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Fresco Chan',
                'cafeteria_id' => 2,
                'img' => 'chan.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Fresco Jamaica',
                'cafeteria_id' => 2,
                'img' => 'jamaica.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            //Cafeteria 3
            [
                'name' => 'Fresco Mango',
                'cafeteria_id' => 3,
                'img' => 'mango.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Fresco Horchata',
                'cafeteria_id' => 3,
                'img' => 'horchata.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Fresco Té',
                'cafeteria_id' => 3,
                'img' => 'te.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

        ];
        Drink::insert($registros);
    }
}
