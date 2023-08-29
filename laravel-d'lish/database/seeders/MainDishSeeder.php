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
                // 'img' => 'Pollo_a_parrilla.jpg',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Relleno de papa',
                // 'img' => 'rellenos_de_papa.jpg',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Filete de Pollo',
                // 'img' => 'filete_pollo.jpg',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Burritos',
                // 'img' => 'burrito.jpg',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Pasta con queso',
                // 'img' => 'pasta_queso.jpg',
                'cafeteria_id' => 1,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // Cafeteria2
            [
                'name' => 'Pollo Guisado',
                // 'img' => 'pollo_guisado.jpg',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Tacos de Carne Asada',
                // 'img' => 'tacos.jpg',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Burrito Vegetariano',
                // 'img' => 'burrito.jpg',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Filete de pollo',
                // 'img' => 'filete_pollo.jpg',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Chow mein',
                // 'img' => 'chow_mein.jpg',
                'cafeteria_id' => 2,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // Cafeteria3
            [
                'name' => 'Filete de pollo',
                // 'img' => 'filete_pollo.jpg',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Costilla en BBQ',
                // 'img' => 'costilla_bbq.jpg',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Lonja de pescado',
                // 'img' => 'lonja_pescado.jpg',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'lasagna',
                // 'img' => 'lasagna.jpg',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Rellenos de papa',
                // 'img' => 'rellenos_de_papa.jpg',
                'cafeteria_id' => 3,
                'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        MainDish::insert($registros);
    }
}
