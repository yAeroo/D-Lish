<?php

namespace Database\Seeders;

use App\Models\MainDish;
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
        $registros = [
            [
                'name' => 'Pollo a la parrilla',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Relleno de papa',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Filete de Pollo',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Burritos',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Pasta con queso',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // Cafeteria2
            [
                'name' => 'Pollo Guisado',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Tacos de Carne Asada',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Burrito Vegetariano',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Filete de pollo',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Chow mein',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // Cafeteria3
            [
                'name' => 'Filete de pollo',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Costilla en BBQ',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Lonja de pescado',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'lasagna',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Rellenos de papa',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        MainDish::insert($registros);
    }
}
