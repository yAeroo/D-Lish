<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use App\Models\OrderDish;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OrderDishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fechaEspecifica = Carbon::create(2023, 26, 8); // Crea una instancia de Carbon con la fecha especificadas
        $registros = [
            //Datos Cafeteria 1
            [
                'user_id' => 8,
                'cafeteria_id' => 1,
                'main_dish_id' => 3,
                'side_dish1_id' => 2,
                'typePay' => 'efectivo',
                'side_dish2_id' => 2,
                'accompaniment_id' => 1,
                'drink_id' => 3,
                'pagado' => false,
                'final_price' => 2.75,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            //Datos Cafeteria 2
            [
                'user_id' => 6,
                'cafeteria_id' => 2,
                'main_dish_id' => 1,
                'typePay' => 'efectivo',
                'side_dish1_id' => 2,
                'side_dish2_id' => 2,
                'accompaniment_id' => 1,
                'pagado' => false,
                'drink_id' => 3,
                'final_price' => 2.75,
                'created_at' => $fechaEspecifica,
                'updated_at' => $fechaEspecifica,
            ],
            //Datos Cafeteria 3
            [
                'user_id' => 7,
                'cafeteria_id' => 3,
                'main_dish_id' => 2,
                'side_dish1_id' => 2,
                'typePay' => 'fondos',
                'pagado' => true,
                'side_dish2_id' => 2,
                'accompaniment_id' => 1,
                'drink_id' => 3,
                'final_price' => 2.75,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ];
        OrderDish::insert($registros);
    }
}
