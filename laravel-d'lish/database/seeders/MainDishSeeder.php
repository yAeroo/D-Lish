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
                'name' => 'Chow Mein',
                'img' => 'chaow_mein.jpg',
                'cafeteria_id' => 1,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Relleno de papa',
                'img' => 'relleno_de_papa.jpg',
                'cafeteria_id' => 1,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Filete de Carne',
                'img' => 'filete_carne.jpg',
                'cafeteria_id' => 1,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            // [
            //     'name' => 'Burritos',
            //     // 'img' => 'burrito.jpg',
            //     'cafeteria_id' => 1,
            //     // 'price' => 1.50,
            //     'created_at' => Carbon::now(),
            //     'updated_at' => Carbon::now(),
            // ],
            // [
            //     'name' => 'Pasta con queso',
            //     // 'img' => 'pasta_queso.jpg',
            //     'cafeteria_id' => 1,
            //     // 'price' => 1.50,
            //     'created_at' => Carbon::now(),
            //     'updated_at' => Carbon::now(),
            // ],
            // Cafeteria2
            [
                'name' => 'Pollo a la plancha',
                'img' => 'pollo_plancha.jpg',
                'cafeteria_id' => 2,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Burrito',
                'img' => 'burrito.jpg',
                'cafeteria_id' => 2,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Orden de 3 Tacos',
                'img' => 'tacos.jpg',
                'cafeteria_id' => 2,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            // [
            //     'name' => 'Filete de pollo',
            //     // 'img' => 'filete_pollo.jpg',
            //     'cafeteria_id' => 2,
            //     // 'price' => 1.50,
            //     'created_at' => Carbon::now(),
            //     'updated_at' => Carbon::now(),
            // ],
            // [
            //     'name' => 'Chow mein',
            //     // 'img' => 'chow_mein.jpg',
            //     'cafeteria_id' => 2,
            //     // 'price' => 1.50,
            //     'created_at' => Carbon::now(),
            //     'updated_at' => Carbon::now(),
            // ],

            // Cafeteria3
            [
                'name' => 'Lasagna',
                'img' => 'lasagna.jpg',
                'cafeteria_id' => 3,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Costilla en BBQ',
                'img' => 'costilla_bbq.jpg',
                'cafeteria_id' => 3,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Lonja de pescado',
                'img' => 'lonja.jpg',
                'cafeteria_id' => 3,
                // 'price' => 1.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            // [
            //     'name' => 'Tortitas de carne',
            //     // 'img' => 'lasagna.jpg',
            //     'cafeteria_id' => 3,
            //     // 'price' => 1.50,
            //     'created_at' => Carbon::now(),
            //     'updated_at' => Carbon::now(),
            // ],
            // [
            //     'name' => 'Rellenos de papa',
            //     // 'img' => 'rellenos_de_papa.jpg',
            //     'cafeteria_id' => 3,
            //     // 'price' => 1.50,
            //     'created_at' => Carbon::now(),
            //     'updated_at' => Carbon::now(),
            // ],
        ];

        MainDish::insert($registros);
    }
}
