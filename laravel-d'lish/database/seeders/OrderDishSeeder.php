<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
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
        DB::table('order_dishes')->insert([
            'name' => 'Pollo a la plancha',
            'description' => 'Delicioso pollo a la planca con complementos',
            'img' => 'defaultDish.png',
            'category' => 'almuerzo',
            'cafeteria_id' => 1,
            'main_dish_id' => 1,
            'side_dish1_id' => 1,
            'side_dish2_id' => 1,
            'accompaniment_id' => 1,
            'drink_id' => 1,
            'final_price' => 2.50,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
