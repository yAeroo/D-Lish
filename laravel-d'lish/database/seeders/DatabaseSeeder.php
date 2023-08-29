<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(UserSeeder::class);
        $this->call(CafeteriaSeeder::class);
        $this->call(MainDishSeeder::class);
        $this->call(SideDish1Seeder::class);
        $this->call(SideDish2Seeder::class);
        $this->call(AccompanimentSeeder::class);
        $this->call(DrinkSeeder::class);
        $this->call(OrderDishSeeder::class);
    }
}
