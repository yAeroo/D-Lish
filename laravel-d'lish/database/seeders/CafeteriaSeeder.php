<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CafeteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cafeterias')->insert([
            'cafeteria_name' => 'Don Bosco',
            'user_id' => '1',
            'cafeteria_img' => 'db_pfp',
            'cafeteria_wallpaper' => 'db_wall',
            'likes' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('cafeterias')->insert([
            'cafeteria_name' => 'Domingo Savio',
            'user_id' => '1',
            'cafeteria_img' => 'ds_pfp',
            'cafeteria_wallpaper' => 'ds_wall',
            'likes' => 75,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('cafeterias')->insert([
            'cafeteria_name' => 'Mamá Margarita',
            'user_id' => '1',
            'cafeteria_img' => 'ma_pfp',
            'cafeteria_wallpaper' => 'ma_wall',
            'likes' => 125,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
